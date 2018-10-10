/* eslint-env jest */
/* global Event */
import ComponentStyles from '../node_modules/alpheios-components/dist/style/style.min.css' // eslint-disable-line
import {Constants} from 'alpheios-data-models'
import {AlpheiosTuftsAdapter, AlpheiosTreebankAdapter} from 'alpheios-morph-client'
import {Lexicons} from 'alpheios-lexicon-client'
import {LemmaTranslations} from 'alpheios-lemma-client'
import { UIController, HTMLSelector, LexicalQuery, ContentOptionDefaults, LanguageOptionDefaults,
  UIOptionDefaults, Options, LocalStorageArea, MouseDblClick, AlignmentSelector } from 'alpheios-components'
import State from './state'
import Template from './template.htmlf'
import interact from 'interactjs'
import Package from '../package.json'

/**
 * Encapsulation of Alpheios functionality which can be embedded in a webpage
 */
class Embedded {
  /**
   * @constructor
   * @param {Object} arguments - object with the following properties:
   *     documentObject: the parent document
   *     enableSelector: a CSS Selector string identifying the page elements for which Alpheios should be activated
   *     disableSelector: a CSS Selector string identifying the page elements for which Alpheios should be deactivated
   *     eventTriggers: a comma-separated list of DOM events to which Alpheios functionality should be attached
   *     popupData: popup data overrides
   *     panelData: panel data overrides
   */
  constructor ({ documentObject = document,
    mobileRedirectUrl = null,
    enableSelector = '.alpheios-enabled',
    disableSelector = '',
    triggerEvents = 'dblclick',
    options = {},
    popupData = {},
    panelData = {} } = {}) {
    this.doc = documentObject
    this.state = new State()
    this.mobileRedirectUrl = mobileRedirectUrl
    this.enableSelector = enableSelector
    this.disableSelector = disableSelector
    this.triggerEvents = triggerEvents
    this.options = new Options(ContentOptionDefaults, LocalStorageArea)
    this.resourceOptions = new Options(LanguageOptionDefaults, LocalStorageArea)

    if (options.ui) {
      this.uiOptions = new Options(options.ui, LocalStorageArea)
    } else {
      this.uiOptions = new Options(UIOptionDefaults, LocalStorageArea)
    }

    if (options.site) {
      this.siteOptions = this.loadSiteOptions(options.site)
    } else {
      this.siteOptions = []
    }
    let pckg
    try {
      pckg = Package
    } catch (e) {
      throw new Error(`Cannot parse package.json, its format is probably incorrect`)
    }
    this.maAdapter = new AlpheiosTuftsAdapter() // Morphological analyzer adapter, with default arguments
    this.tbAdapter = new AlpheiosTreebankAdapter() // Morphological analyzer adapter, with default arguments
    let manifest = { version: pckg.version, name: pckg.description }
    let template = { html: Template, panelId: 'alpheios-panel-embedded', popupId: 'alpheios-popup-embedded' }
    this.ui = new UIController(this.state, this.options, this.resourceOptions, this.uiOptions, manifest, template)
    this.doc.body.addEventListener('Alpheios_Embedded_Check', event => { this.notifyExtension(event) })
    this.doc.body.addEventListener('keydown', event => { this.handleEscapeKey(event) })
    Object.assign(this.ui.panel.panelData, panelData)
    Object.assign(this.ui.popup.popupData, popupData)
  }

  handleEscapeKey (event) {
    if (event.keyCode === 27) {
      if (this.state.isPanelOpen()) {
        this.ui.panel.close()
      } else if (this.ui.popup.visible) {
        this.ui.popup.close()
      }
    }
    return true
  }

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

  activate () {
    if (this.mobileRedirectUrl && this.detectMobile()) {
      document.location = this.mobileRedirectUrl
    }
    let selector = this.enableSelector
    let trigger = this.triggerEvents.split(/,/)
    if (!selector || !trigger) {
      throw new Error('Configuration must define both trigger and selector')
    }
    let activateOn = this.doc.querySelectorAll(selector)
    if (activateOn.length === 0) {
      throw new Error(`activation element ${activateOn} is missing`)
    }
    if (this.disableSelector) {
      let disableOn = this.doc.querySelectorAll(this.disableSelector)
      for (let elem of disableOn) {
        elem.setAttribute('data-alpheios-ignore', 'all')
      }
    }
    for (let t of trigger) {
      if (t === 'dblclick') {
        MouseDblClick.listen(selector, evt => this.handler(evt))
      } else {
        throw new Error(`events other than dblclick are not yet supported`)
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

  handler (event) {
    let htmlSelector = new HTMLSelector(event, this.options.items.preferredLanguage.currentValue)
    let textSelector = htmlSelector.createTextSelector()

    if (!textSelector.isEmpty()) {
      this.ui.updateLanguage(textSelector.languageCode)
      LexicalQuery.create(textSelector, {
        htmlSelector: htmlSelector,
        uiController: this.ui,
        maAdapter: this.maAdapter,
        tbAdapter: this.tbAdapter,
        lexicons: Lexicons,
        lemmaTranslations: this.enableLemmaTranslations(textSelector) ? { adapter: LemmaTranslations, locale: this.options.items.locale.currentValue } : null,
        resourceOptions: this.resourceOptions,
        siteOptions: this.siteOptions,
        langOpts: { [Constants.LANG_PERSIAN]: { lookupMorphLast: true } } // TODO this should be externalized
      }
      ).getData()
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
}

export {Embedded}
