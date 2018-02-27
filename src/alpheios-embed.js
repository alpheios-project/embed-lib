import {LanguageDataList} from 'alpheios-inflection-tables'
import {Constants} from 'alpheios-data-models'
import AlpheiosTuftsAdapter from 'alpheios-tufts-adapter'
import {Lexicons} from 'alpheios-lexicon-client'
import { UIController, HTMLSelector, LexicalQuery, ContentOptions, ResourceOptions } from 'alpheios-components'
import State from './state'

class Embedded {
  constructor (anchor = null, doc = document) {
    this.anchor = anchor
    this.doc = doc
    this.state = new State()
    this.options = new ContentOptions(this.optionSaver, this.optionLoader)
    this.resourceOptions = new ResourceOptions(this.optionSaver, this.optionLoader)
    this.maAdapter = new AlpheiosTuftsAdapter() // Morphological analyzer adapter, with default arguments
    this.langData = new LanguageDataList().loadData()
    let manifest = { version: '1.0', name: 'Alpheios Embedded Library'}
    this.ui = new UIController(this.state, this.options, this.resourceOptions, State.statuses, manifest)
  }

  optionSaver() {
    return new Promise((resolve, reject) => {
      reject("save not implemented")
    })
  }

  optionLoader() {
    return new Promise((resolve, reject) => {
      reject("load not implemented")
    })
  }

  activate () {
    let elem = this.doc.querySelector(this.anchor)
    let selector = elem.dataset.selector
    let trigger = elem.dataset.trigger
    this.defaultLang = elem.dataset.defaultlang
    let activateOn = this.doc.querySelectorAll(selector)
    for (let o of activateOn) {
      o.addEventListener(trigger, event => { this.wordHandler(event) })
    }
  }

  wordHandler (event) {
    let htmlSelector = new HTMLSelector(event, this.defaultLang)
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
