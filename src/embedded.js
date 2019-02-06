/* eslint-env jest */
/* global Event */
import ComponentStyles from '../node_modules/alpheios-components/dist/style/style.min.css' // eslint-disable-line
import { Constants } from 'alpheios-data-models'
import { UIController, UIEventController, HTMLSelector, LexicalQuery, ResourceQuery, AnnotationQuery,
  ContentOptionDefaults, LanguageOptionDefaults, Options, LocalStorageArea,
  MouseDblClick, LongTap, GenericEvt, AlignmentSelector,
   L10nModule, AuthModule, PanelModule, PopupModule, Locales } from 'alpheios-components'
import State from './state'
import Template from './template.htmlf'
import interact from 'interactjs'
import Package from '../package.json'
import AppAuthenticator from './lib/app-authenticator'

/*
A UI controller's builder function customized for webextension
 */
const createUiController = (state, options) => {
  let uiController = new UIController(state, options)

  uiController.siteOptionsDefaults = []

  // Register data modules
  uiController.registerDataModule(L10nModule, Locales.en_US, Locales.bundleArr())
  if (typeof auth0Env !== 'undefined') {
    // Register an authentication module only with authentication environment is loaded
    uiController.registerDataModule(AuthModule, new AppAuthenticator())
  }

  // Register UI modules
  uiController.registerUiModule(PanelModule, {
    mountPoint: '#alpheios-panel-embedded'
  })
  uiController.registerUiModule(PopupModule, {
    mountPoint: '#alpheios-popup-embedded'
  })

  // Creates on configures an event listener
  let eventController = new UIEventController()
  switch (uiController.options.textQueryTrigger) {
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
  }

  eventController.registerListener('HandleEscapeKey', document, uiController.handleEscapeKey.bind(uiController), GenericEvt, 'keydown')
  eventController.registerListener('AlpheiosPageLoad', 'body', uiController.updateAnnotations.bind(uiController), GenericEvt, 'Alpheios_Page_Load')

  // Attaches an event controller to a UIController instance
  uiController.evc = eventController

  // Subscribe to LexicalQuery events
  LexicalQuery.evt.LEXICAL_QUERY_COMPLETE.sub(uiController.onLexicalQueryComplete.bind(uiController))
  LexicalQuery.evt.MORPH_DATA_READY.sub(uiController.onMorphDataReady.bind(uiController))
  LexicalQuery.evt.MORPH_DATA_NOTAVAILABLE.sub(uiController.onMorphDataNotFound.bind(uiController))
  LexicalQuery.evt.HOMONYM_READY.sub(uiController.onHomonymReady.bind(uiController))
  LexicalQuery.evt.LEMMA_TRANSL_READY.sub(uiController.updateTranslations.bind(uiController))
  LexicalQuery.evt.WORD_USAGE_EXAMPLES_READY.sub(uiController.updateWordUsageExamples.bind(uiController))
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
   *                         Alpheios functionality. It should return true to proceed with lookup or false to abort.
   *                         Default: no-op, returns true
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
    triggerPreCallback = (evt) => { return true } // Not used at the moment but can be set as a filter for `this.ui.getSelectedText()` calls
    } = {}) {
    this.clientId = clientId

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

    let pckg
    try {
      pckg = Package
    } catch (e) {
      throw new Error(`Cannot parse package.json, its format is probably incorrect`)
    }

    // Set an initial UI Controller state for activation
    // this.state.setPanelClosed() // A default state of the panel is CLOSED
    this.state.tab = 'info' // A default tab is "info"

    this.ui = createUiController(this.state, {
      storageAdapter: LocalStorageArea,
      textQueryTrigger: this.triggerEvents,
      textQuerySelector: this.enabledSelector,
      app: { version: pckg.version, name: pckg.description },
      template: { html: Template }
    })
  }

  notifyExtension () {
    this.doc.body.dispatchEvent(new Event('Alpheios_Embedded_Response'))
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
}

export { Embedded }
