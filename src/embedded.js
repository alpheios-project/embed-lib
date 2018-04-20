/* eslint-env jest */
/* global Event */
import {Constants, Translation} from 'alpheios-data-models'
import {AlpheiosTuftsAdapter} from 'alpheios-morph-client'
import {Lexicons} from 'alpheios-lexicon-client'
import { UIController, HTMLSelector, LexicalQuery, ContentOptions, ResourceOptions } from 'alpheios-components'
import State from './state'
import Template from './template.htmlf'

import {LemmaTranslations} from 'alpheios-lemma-client'


/**
 * Encapsulation of Alpheios functionality which can be embedded in a webpage
 */
class Embedded {
  /**
   * @constructor
   * @param {string} anchor - CSS selector for the HTML element containing Alpheios configuration (default is '#alpheios-main')
   *                          the anchor element should contain the following attributes:
                              data-selector: a CSS Selector string identifying the page elements for which Alpheios should be activated
                              data-trigger: the DOM event to which Alpheios functionality should be attached
   * @param {Document} doc - the parent document
   * @param {Object} popupData - popup data overrides
   * @param {Object} panelData - panel data overrides
   */
  constructor (anchor = '#alpheios-main', doc = document, popupData = {}, panelData = {}) {
    this.anchor = anchor
    this.doc = doc
    this.state = new State()
    this.options = new ContentOptions(this.optionSaver, this.optionLoader)
    this.resourceOptions = new ResourceOptions(this.optionSaver, this.optionLoader)
    this.maAdapter = new AlpheiosTuftsAdapter() // Morphological analyzer adapter, with default arguments
    let manifest = { version: '1.0', name: 'Alpheios Embedded Library' }
    let template = { html: Template, panelId: 'alpheios-panel-embedded', popupId: 'alpheios-popup-embedded' }
    this.ui = new UIController(this.state, this.options, this.resourceOptions, manifest, template)
    this.doc.body.addEventListener('Alpheios_Embedded_Check', event => { this.notifyExtension(event) })
    Object.assign(this.ui.panel.panelData, panelData)
    Object.assign(this.ui.popup.popupData, popupData)
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
    let elem = this.doc.querySelector(this.anchor)
    if (!elem) {
      throw new Error(`anchor element ${elem} is missing`)
    }
    console.log(elem.dataset)
    let selector = elem.dataset.selector
    let trigger = elem.dataset.trigger.split(/,/)
    if (!selector || !trigger) {
      throw new Error(`anchor element ${this.anchor} must define both trigger and selector`)
    }
    let activateOn = this.doc.querySelectorAll(selector)
    if (activateOn.length === 0) {
      throw new Error(`activation element ${activateOn} is missing`)
    }
    for (let o of activateOn) {
      for (let t of trigger) {
        o.addEventListener(t, event => { this.handler(event) })
      }
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
        lexicons: Lexicons,

        lemmaTranslations: LemmaTranslations,

        resourceOptions: this.resourceOptions,
        langOpts: { [Constants.LANG_PERSIAN]: { lookupMorphLast: true } } // TODO this should be externalized
      }
      ).getData()
    }
  }
}

export {Embedded}
