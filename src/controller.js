'use strict'
import AlpheiosTuftsAdapter from 'alpheios-tufts-adapter'
import SourceSelection from './source_selection.js'
import * as Lex from 'alpheios-lexicon-client'
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
    this.lexMap = new Map()
    for (let lang of ['lat','grc']) {
      let list = []
      let lexicons = Lex.AlpheiosLexAdapter.getLexicons(lang)
      for (let [lex,desc] of lexicons.entries()) {
        list.push(new Lex.AlpheiosLexAdapter(lex),desc)
      }
      this.lexMap.set(lang,list)
    }
  }

  activate (adapterArgs) {
    let elem = this.doc.querySelector(this.anchor)
    let selector = elem.dataset.selector
    let trigger = elem.dataset.trigger
    let adapterClass = elem.dataset['adapterclass']
    this.defaultLang = elem.dataset.defaultlang
    this.adapter = new (this.adapters.get(adapterClass))(adapterArgs)
    this.resultsElem = elem.dataset.results
    let activateOn = this.doc.querySelectorAll(selector)
    for (let o of activateOn) {
      o.addEventListener(trigger, event => { this.wordHandler(event) })
    }
    let lexList = '<ul>'
    for (let [k,v] of this.lexMap.entries()) {
      lexList = lexList + `<li>${v[1]}</li>`
    }
    lexList = lexList + '</ul>'
    this.appendToResults('lexicons',lexList)
  }

  wordHandler (event) {
    this.clearResults()
    let selection = this.getSourceSelection(event.target, this.defaultLang)
    let parser = new DOMParser()
    let elem = this.doc.querySelector(this.resultsElem)
    selection.reset()
    if (selection.word_selection.word) {
      this.adapter.fetch(selection.language.toCode(), selection.word_selection.word)
          .then(
            (json) => {
              console.log(json)
              let homonym = this.adapter.transform(json, selection.word_selection.word)
              if (this.lexMap.has(selection.language.toCode())) {
                let lexClient = this.lexMap.get(selection.language.toCode())[0]
                for (let lex of homonym.lexemes) {
                  let lemma = lex.lemma.word
                  let lemma_provider = lex.provider
                  this.appendToResults('lemma',lemma)
                  this.appendToResults('lemma_provider',lemma_provider)
                  let shortdef
                  if (! lex.meaning) {
                    lexClient.lookupShortDef(lex.lemma).then((result) => {
                      lex.meaning = result
                      this.appendToResults('shortdef',lex.meaning.text)
                      if (lex.meaning.provider !== lemma.provider) {
                        this.appendToResults('shortdef_provider',result.provider)
                      }
                    })
                  } else {
                    this.appendToResults('shortdef',lex.meaning.text)
                  }
                  lexClient.lookupFullDef(lex.lemma).then((result) => {
                    let def
                    try {
                      this.appendToResults('fulldef',result.text)
                    } catch (e) {
                      this.appendToResults('fulldef_error',e)
                    }
                  })
                }
              }
            },
            (error) => { console.log(`Error ${error}`) })
    }
    console.log(`Selected ${selection}`)
  };

  clearResults() {
    let elem = this.doc.querySelector(this.resultsElem)
    elem.innerHTML = ''
  }

  appendToResults(what,str) {
    let elem = this.doc.querySelector(this.resultsElem)
    let parser = new DOMParser()
    elem.appendChild(parser.parseFromString(`<h2>${what}</h2>`,'text/html').documentElement)
    elem.appendChild(parser.parseFromString(`<div>${str}</div>`,'text/html').documentElement)
  }

  getSourceSelection (target, language) {
    return new SourceSelection(target, language)
  }
};
