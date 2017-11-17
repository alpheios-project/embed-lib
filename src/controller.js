'use strict'
import AlpheiosTuftsAdapter from 'alpheios-tufts-adapter'
import SourceSelection from './source_selection.js'
import * as Dict from 'alpheios-dict-client'
// Import shared language data
// import * as Lib from "./lib/lib.js";
// import TuftsAdapter from "./analyzer/tufts/adapter.js";
// import Presenter from "./presenter/presenter.js";

// Load Latin language data
// import * as ModuleNS from './lib/lang/latin/latin.js';
// import {dataSet} from "./lib/lang/latin/latin";
// let langData = ModuleNS.dataSet;
// Prepare lang data for the first use
// dataSet.loadData();

export default class {
  constructor (anchor = null, doc = document) {
    this.anchor = anchor
    this.doc = doc
    this.adapters = new Map([['AlpheiosTuftsAdapter', AlpheiosTuftsAdapter]])
    this.lexClient = new Dict.AlpheiosLexAdapter('lsj')
  }

  activate (adapterArgs) {
    let elem = this.doc.querySelector(this.anchor)
    let selector = elem.dataset.selector
    let trigger = elem.dataset.trigger
    let adapterClass = elem.dataset['adapterclass']
    this.defaultLang = elem.dataset.defaultlang
    this.adapter = new (this.adapters.get(adapterClass))(adapterArgs)
    let activateOn = this.doc.querySelectorAll(selector)
    for (let o of activateOn) {
      o.addEventListener(trigger, event => { this.wordHandler(event) })
    }
  }

  wordHandler (event) {
    let selection = this.getSourceSelection(event.target, this.defaultLang)
    selection.reset()
    if (selection.word_selection.word) {
      this.adapter.fetch(selection.language.toCode(), selection.word_selection.word)
          .then(
            (json) => {
              console.log(json)
              let homonym = this.adapter.transform(json, selection.word_selection.word)
              console.log(homonym)
              for (let lex of homonym.lexemes) {
                this.lexClient.lookupShortDef(lex.lemma).then((result) => { console.log(`short def: ${result}`) })
                this.lexClient.lookupFullDef(lex.lemma).then((result) => {
                  let elem = this.doc.querySelector(this.anchor)
                  let parser = new DOMParser()
                  let def
                  try {
                      def = parser.parseFromString(result.text,'text/html')
                  } catch (e) {
                      def = parser.parseFromString(`<div class="error">${e}</div>`,'text/html')
                  }
                  elem.appendChild(def.documentElement)
                })
              }
            },
            (error) => { console.log(`Error ${error}`) })
    }
    console.log(`Selected ${selection}`)
  };

  getSourceSelection (target, language) {
    return new SourceSelection(target, language)
  }
};
