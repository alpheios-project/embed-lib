'use strict';
import SelectedWord from './selectedword.js';
// Import shared language data
//import * as Lib from "./lib/lib.js";
//import TuftsAdapter from "./analyzer/tufts/adapter.js";
//import Presenter from "./presenter/presenter.js";

// Load Latin language data
//import * as ModuleNS from './lib/lang/latin/latin.js';
//import {dataSet} from "./lib/lang/latin/latin";
//let langData = ModuleNS.dataSet;
// Prepare lang data for the first use
//dataSet.loadData();

export default class {
  constructor(anchors=[],doc=document) {
    this.anchors = anchors;
    this.doc = doc;
  }

  activate() {
    for (let a of this.anchors) {
      let elems = this.doc.querySelectorAll(a);
      for (let e of elems) {
        let selector = e.dataset.selector;
        let trigger = e.dataset.trigger;
        let defaultlang = e.dataset.defaultlang;
        let activateOn = this.doc.querySelectorAll(selector);
        for (let o of activateOn) {
          o.addEventListener(trigger, event => { this.wordHandler(event); });
        }
      }
    }
  }

  wordHandler(event) {
    console.log(`Triggered on ${event.target.id}`);
    let selection = new SelectedWord(event.target);
  };

};
