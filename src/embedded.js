import {LanguageDataList} from 'alpheios-inflection-tables'
import {Constants} from 'alpheios-data-models'
import AlpheiosTuftsAdapter from 'alpheios-tufts-adapter'
import {Lexicons} from 'alpheios-lexicon-client'
import { UIController, HTMLSelector, LexicalQuery, ContentOptions, ResourceOptions } from 'alpheios-components'
import State from './state'

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
   */
  constructor (anchor = '#alpheios-main', doc = document) {
    this.anchor = anchor
    this.doc = doc
    this.state = new State()
    this.options = new ContentOptions(this.optionSaver, this.optionLoader)
    this.resourceOptions = new ResourceOptions(this.optionSaver, this.optionLoader)
    this.maAdapter = new AlpheiosTuftsAdapter() // Morphological analyzer adapter, with default arguments
    this.langData = new LanguageDataList().loadData()
    let manifest = { version: '1.0', name: 'Alpheios Embedded Library' }
    this.ui = new UIController(this.state, this.options, this.resourceOptions, State.statuses, manifest)
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
    let trigger = elem.dataset.trigger
    if (!selector || !trigger) {
      throw new Error(`anchor element ${this.anchor} must define both trigger and selector`)
    }
    let activateOn = this.doc.querySelectorAll(selector)
    if (activateOn.length === 0) {
      throw new Error(`activation element ${activateOn} is missing`)
    }
    for (let o of activateOn) {
      o.addEventListener(trigger, event => { this.handler(event) })
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
        langData: this.langData,
        lexicons: Lexicons,
        resourceOptions: this.resourceOptions,
        langOpts: { [Constants.LANG_PERSIAN]: { lookupMorphLast: true } } // TODO this should be externalized
      }
      ).getData()
    }
  }
}

export {Embedded}
