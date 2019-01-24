/* eslint-env jest */
/* global Event, Auth0Lock */
import ComponentStyles from '../node_modules/alpheios-components/dist/style/style.min.css' // eslint-disable-line
import { Constants } from 'alpheios-data-models'
import { UIController, UIEventController, HTMLSelector, LexicalQuery, ResourceQuery, AnnotationQuery,
  ContentOptionDefaults, LanguageOptionDefaults, Options, LocalStorageArea,
  MouseDblClick, LongTap, GenericEvt, AlignmentSelector,
   L10nModule, PanelModule, PopupModule, Locales } from 'alpheios-components'
import State from './state'
import Template from './template.htmlf'
import interact from 'interactjs'
import Package from '../package.json'


UIController.createEmbed = (state, options) => {
  let uiController = new UIController(state, options)

  // Register data modules
  uiController.registerDataModule(L10nModule, Locales.en_US, Locales.bundleArr())

  // Register UI modules
  uiController.registerUiModule(PanelModule, {
    mountPoint: '#alpheios-panel-embedded',
    tabs: uiController.tabState, // TODO: should be accessed via a public API, not via a direct link. This is a temporary solutions
    uiController: uiController // Some child UI components require direct link to a uiController. TODO: remove during refactoring
  })
  uiController.registerUiModule(PopupModule, {
    mountPoint: '#alpheios-popup-embedded',
    uiController: uiController // Some child UI components require direct link to a uiController. TODO: remove during refactoring
  })

  // Creates on configures an event listener
  let eventController = new UIEventController()
  /*switch (uiController.options.textQueryTrigger) {
    case 'dblClick':
      eventController.registerListener('GetSelectedText', uiController.options.textQuerySelector, uiController.getSelectedText.bind(uiController), MouseDblClick)
      break
    case 'longTap':
      eventController.registerListener('GetSelectedText', uiController.options.textQuerySelector, uiController.getSelectedText.bind(uiController), LongTap)
      break
    default:
      eventController.registerListener(
        'GetSelectedText', uiController.options.textQuerySelector, uiController.getSelectedText.bind(uiController), GenericEvt, uiController.options.textQueryTrigger
      )
  }*/

  eventController.registerListener('HandleEscapeKey', document, uiController.handleEscapeKey.bind(uiController), GenericEvt, 'keydown')
  eventController.registerListener('AlpheiosPageLoad', 'body', uiController.updateAnnotations.bind(uiController), GenericEvt, 'Alpheios_Page_Load')

  // Attaches an event controller to a UIController instance
  uiController.evc = eventController

  // Subscribe to LexicalQuery events
  LexicalQuery.evt.LEXICAL_QUERY_COMPLETE.sub(uiController.onLexicalQueryComplete.bind(uiController))
  LexicalQuery.evt.MORPH_DATA_READY.sub(uiController.onMorphDataReady.bind(uiController))
  LexicalQuery.evt.MORPH_DATA_NOTAVAILABLE.sub(uiController.onMorphDataNotFound.bind(uiController))
  LexicalQuery.evt.HOMONYM_READY.sub(uiController.onHomonymReady.bind(uiController))
  LexicalQuery.evt.LEMMA_TRANSL_READY.sub(uiController.onLemmaTranslationsReady.bind(uiController))
  LexicalQuery.evt.DEFS_READY.sub(uiController.onDefinitionsReady.bind(uiController))
  LexicalQuery.evt.DEFS_NOT_FOUND.sub(uiController.onDefinitionsNotFound.bind(uiController))

  // Subscribe to ResourceQuery events
  ResourceQuery.evt.RESOURCE_QUERY_COMPLETE.sub(uiController.onResourceQueryComplete.bind(uiController))
  ResourceQuery.evt.GRAMMAR_AVAILABLE.sub(uiController.onGrammarAvailable.bind(uiController))
  ResourceQuery.evt.GRAMMAR_NOT_FOUND.sub(uiController.onGrammarNotFound.bind(uiController))

  // Subscribe to AnnotationQuery events
  AnnotationQuery.evt.ANNOTATIONS_AVAILABLE.sub(uiController.onAnnotationsAvailable.bind(uiController))

  return uiController
}

/**
 * Encapsulation of Alpheios functionality which can be embedded in a webpage
 */
class Embedded {
  /**
   * @constructor
   * @param {Object} arguments - object with the following properties:
   *     clientId: a string identifying the embedding client or site. Required.
   *     documentObject: the parent document. Default: window.document
   *     enabledSelector: a CSS Selector string identifying the page elements for which Alpheios should be activated
   *                      Default: ".alpheios-enabled"
   *     disabledSelector: a CSS Selector string identifying the page elements for which Alpheios should be deactivated
   *                       Default: [data-alpheios-ignore="all"]
   *     enabledClass: a CSS class to apply to alpheios enabled elements
   *                   Default: ""
   *     disabledClass: a CSS class to apply to alpheios disabled elements
   *                    Default: ""
   *     eventTriggers: a comma-separated list of DOM events to which Alpheios functionality should be attached
   *                    Default: "dblclick"
   *     triggerPreCallback: a callback function which is called when the trigger event handler is invoked, prior to initiating
   *                         Alpheios functionality. It should return true to proced with lookup or false to abort.
   *                         Default: no-op, returns true
   *     popupData: popup data overrides (currently only positioning properties supported, top and left)
   *                Default: { top: '10vh', left: '10vw'}
   *     panelData: panel data overrides (none currently supported. reserved for future use)
   *                Default: {}
   *     mobileRedirectUrl: a URL to which to direct users if they use a mobile device to access a page which has Alpheios embedded
   */
  constructor ({
    clientId = null,
    documentObject = document,
    mobileRedirectUrl = null,
    enabledSelector = '.alpheios-enabled',
    disabledSelector = '',
    enabledClass = '',
    disabledClass = '',
    triggerEvents = 'dblclick',
    triggerPreCallback = (evt) => { return true },
    preferences = { ui: null, site: null },
    popupData = {},
    panelData = {} } = {}) {
    this.clientId = clientId
    this.popupData = popupData
    this.panelData = panelData
    if (this.clientId === null) {
      throw new Error('Please identify the site.')
    }
    // TODO at some point in the future we may add authentication of
    // clientId
    this.doc = documentObject
    this.state = new State()
    this.mobileRedirectUrl = mobileRedirectUrl
    this.enabledSelector = enabledSelector
    this.disabledSelector = disabledSelector
    this.enabledClass = enabledClass
    this.disabledClass = disabledClass
    this.triggerEvents = triggerEvents
    this.triggerPreCallback = triggerPreCallback
    this.options = new Options(ContentOptionDefaults, LocalStorageArea)
    this.resourceOptions = new Options(LanguageOptionDefaults, LocalStorageArea)

    if (preferences.site) {
      this.siteOptions = this.loadSiteOptions(preferences.site)
    } else {
      this.siteOptions = []
    }
    let pckg
    try {
      pckg = Package
    } catch (e) {
      throw new Error(`Cannot parse package.json, its format is probably incorrect`)
    }

    // An Auth0 Lock widget instance. Will be initialized lazily
    this.auth0Lock = null
    this._auth0profile = null // A user profile from Auth0

    // Set an initial UI Controller state for activation
    this.state.setPanelClosed() // A default state of the panel is CLOSED
    this.state.tab = 'info' // A default tab is "info"

    this.ui = UIController.createEmbed(this.state, {
      storageAdapter: LocalStorageArea,
      app: { version: pckg.version, name: pckg.description },
      template: { html: Template }
    })
    // TODO: This is a temporary fix. Later we should pass necessary preferences via a UIController's options object
    if (preferences.ui) { this.ui.uiOptions = new Options(preferences.ui, LocalStorageArea) }
  }

  // We probably don't need this because it seems to implement the same functionality as the existing `handleEscapeKey()` in a UI Controller
  /*handleEscapeKey (event) {
    if (event.keyCode === 27) {
      if (this.state.isPanelOpen()) {
        this.ui.panel.close()
      } else if (this.ui.popup.visible) {
        this.ui.popup.close()
      }
    }
    return true
  }*/

  notifyExtension (event) {
    this.doc.body.dispatchEvent(new Event('Alpheios_Embedded_Response'))
  }

  optionSaver () {
    return new Promise((resolve, reject) => {
      reject(new Error('save not implemented'))
    })
  }

  optionLoader () {
    return new Promise((resolve, reject) => {
      reject(new Error('load not implemented'))
    })
  }

  async activate () {
    try {
      /**
       * Notify extension that an embedded lib is present.
       * We need to do this right after an activation.
       * If webextension is loaded sooner than the embedded library
       * than the extension will have no information about
       * the embedded library presence unless explicitly notified by us.
       */
      this.notifyExtension()

      // await this.ui.init() // Activate will call `init()` if has not been initialized previously
      await this.ui.activate()

      console.log('UIController has been activated')
      // Set a body attribute so the content scrip will know if embedded library is active on a page
      this.doc.body.setAttribute('alpheios-embed-lib-status', 'active')
      this.doc.body.addEventListener('Alpheios_Embedded_Check', event => { this.notifyExtension(event) })
      // this.doc.body.addEventListener('keydown', event => { this.handleEscapeKey(event) }) // This is done in UI controller's `activate()`
      // The following two seems to not be used currently. The better way to do it is through options of panel and popup modules.
      // Object.assign(this.ui.panel.vi.panelData, this.panelData)
      // Object.assign(this.ui.popup.vi.popupData, this.popupData)
    } catch (error) {
      console.error(`Cannot activate a UI controller: ${error}`)
      return
    }

    if (this.mobileRedirectUrl && this.detectMobile()) {
      document.location = this.mobileRedirectUrl
    }
    let selector = this.enabledSelector

    let trigger = this.triggerEvents.split(/,/)
    if (!selector || !trigger) {
      throw new Error('Configuration must define both trigger and selector')
    }
    let activateOn = this.doc.querySelectorAll(selector)
    if (activateOn.length === 0) {
      throw new Error(`activation element ${activateOn} is missing`)
    }
    if (this.enabledClass) {
      for (let elem of activateOn) {
        elem.classList.add(this.enabledClass)
      }
    }
    if (this.disabledSelector) {
      let disableOn = this.doc.querySelectorAll(this.disabledSelector)
      for (let elem of disableOn) {
        elem.setAttribute('data-alpheios-ignore', 'all')
        if (this.disabledClass) {
          elem.classList.add(this.disabledClass)
        }
      }
    }

    for (let t of trigger) {
      if (t === 'dblclick') {
        MouseDblClick.listen(selector, (evt, domEvt) => this.handler(evt, domEvt))
      } else if (t === 'touchstart' || t === 'touchend') {
        LongTap.listen(selector, (evt, domEvt) => this.handler(evt, domEvt))
        console.warn(`touch events are not yet fully supported`)
      } else {
        GenericEvt.listen(selector, (evt, domEvt) => this.handler(evt, domEvt), t)
        console.warn(`events other than dblclick may not work correctly`)
      }
    }

    let alignment = new AlignmentSelector(this.doc, {})
    alignment.activate()
    let alignedTranslation = this.doc.querySelectorAll('.aligned-translation')
    for (let a of alignedTranslation) {
      interact(a).resizable({
      // resize from all edges and corners
        edges: { left: true, right: true, bottom: false, top: false },

        // minimum size
        restrictSize: {
          min: { width: 200 }
        },

        // keep the edges inside the parent
        restrictEdges: {
          outer: this.doc.body,
          endOnly: true
        },
        inertia: true
      }).on('resizemove', event => {
        let target = event.target
        // update the element's style
        target.style.width = `${event.rect.width}px`
      })
    }
  }

  handler (alpheiosEvent, domEvent) {
    if (this.triggerPreCallback(domEvent)) {
      let htmlSelector = new HTMLSelector(alpheiosEvent, this.options.items.preferredLanguage.currentValue)
      let textSelector = htmlSelector.createTextSelector()

      if (!textSelector.isEmpty()) {
        let lexQuery = LexicalQuery.create(textSelector, {
          htmlSelector: htmlSelector,
          resourceOptions: this.resourceOptions,
          siteOptions: this.siteOptions,
          lemmaTranslations: this.enableLemmaTranslations(textSelector) ? { locale: this.contentOptions.items.locale.currentValue } : null,
          langOpts: { [Constants.LANG_PERSIAN]: { lookupMorphLast: true } } // TODO this should be externalized
        })

        this.ui.setTargetRect(htmlSelector.targetRect)
        this.ui.newLexicalRequest(textSelector.languageID)
        this.ui.message(this.ui.api.l10n.getMsg('TEXT_NOTICE_DATA_RETRIEVAL_IN_PROGRESS'))
        this.ui.showStatusInfo(textSelector.normalizedText, textSelector.languageID)
        this.ui.updateLanguage(textSelector.languageID)
        this.ui.updateWordAnnotationData(textSelector.data)

        lexQuery.getData()
      }
    }
  }

  loadSiteOptions (siteOptions) {
    let allSiteOptions = []
    let loaded = siteOptions
    for (let site of loaded) {
      for (let domain of site.options) {
        let siteOpts = new Options(domain, LocalStorageArea)
        allSiteOptions.push({ uriMatch: site.uriMatch, resourceOptions: siteOpts })
      }
    }
    return allSiteOptions
  }

  /**
   * Check to see if Lemma Translations should be enabled for a query
   *  NB this is Prototype functionality
   */
  enableLemmaTranslations (textSelector) {
    return textSelector.languageID === Constants.LANG_LATIN &&
      this.options.items.enableLemmaTranslations.currentValue &&
      !this.options.items.locale.currentValue.match(/^en-/)
  }

  /**
   *  Detect mobile device
   */
  detectMobile () {
    if (window.sessionStorage.desktop) {
      return false
    } else if (window.localStorage.mobile) {
      return true
    }

    // alternative
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile']
    for (var i in mobile) {
      if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) {
        return true
      }
    }

    // nothing found.. assume desktop
    return false
  }

  initLock () {
    if (!this.auth0Lock) {
      if (!auth0Env) {
        console.error(`Unable to find Auth0 configuration. Auth0 functionality will be disabled`)
        return
      }
      this.auth0env = auth0Env

      // initialize auth0 lock
      this.auth0Lock = new Auth0Lock(this.auth0env.CLIENT_ID, this.auth0env.DOMAIN, {
        auth: {
          redirect: false,
          params: {
            scope: 'openid email'
          },
          responseType: 'token id_token'
        }
      })

      // Handle login
      this.auth0Lock.on('authenticated', (authResult) => {
        this.auth0Lock.getUserInfo(authResult.accessToken, (error, profile) => {
          if (error) {
            // Handle error
            return
          }

          document.getElementById('nick').textContent = profile.nickname

          localStorage.setItem('accessToken', authResult.accessToken)
          localStorage.setItem('id_token', authResult.idToken)
          localStorage.setItem('profile', JSON.stringify(profile))

          this.updateAuth0UI()
        })
      })

      // Unrecoverable error handler
      this.auth0Lock.on('unrecoverable_error', (error) => {
        console.error(`Auth0 Lock unrecoverable error: `, error)
      })

      // An authorization error
      this.auth0Lock.on('authorization_error', (error) => {
        console.error(`Auth0 Lock authorization error: `, error)
      })

      // TODO: Handle a situation when `authenticated` event is never fired (is that ever possible)
    }
  }

  logIn () {
    this.auth0Lock.show()
  }

  logOut () {
    localStorage.removeItem('id_token')
    localStorage.removeItem('access_token')
    localStorage.removeItem('profile')
  }

  get isLoggedIn () {
    return Boolean(localStorage.getItem('id_token'))
  }

  getUserData () {
    // Call private API with JWT in header
    const token = localStorage.getItem('id_token')

     // block request from happening if no JWT token present
     if (!token) {
       console.error('You must login to call this protected endpoint!')
      return
    }
    // Do request to private endpoint
    fetch(this.auth0env.ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then((data) => {
        console.log('Token:', data)
      })
      .catch((e) => {
        console.error('error', e)
      })
  }

  get profile () {
    if (!this._auth0profile) { this._auth0profile = JSON.parse(localStorage.getItem('profile')) }
    return this._auth0profile
  }

  updateAuth0UI () {
    if (this.isLoggedIn) {
      // swap buttons
      document.getElementById('btn-login').style.display = 'none'
      document.getElementById('btn-logout').style.display = 'inline'
      // show username
      document.getElementById('nick').textContent = this.profile.email
    }
  }
}

export { Embedded }
