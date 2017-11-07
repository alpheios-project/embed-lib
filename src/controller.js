'use strict'
import AlpheiosTuftsAdapter from 'alpheios-tufts-adapter'
import * as Lib from 'alpheios-data-models'
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
    let selection = new Lib.SourceSelection(event.target, this.defaultLang)
    selection.reset()
    if (selection.word_selection.word) {
      this.adapter.fetch(selection.language.toCode(), selection.word_selection.word)
          .then(
            (json) => {
              console.log(json)
              let homonym = this.adapter.transform(json, selection.word_selection.word)
              console.log(homonym)
            },
            (error) => { console.log(`Error ${error}`) })
    }
    console.log(`Selected ${selection}`)
  };
};
