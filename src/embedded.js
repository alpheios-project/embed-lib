/* eslint-env jest */
/* global Event */
import ComponentStyles from '../node_modules/alpheios-components/dist/style/style.min.css' // eslint-disable-line
import {Constants} from 'alpheios-data-models'
import {AlpheiosTuftsAdapter} from 'alpheios-morph-client'
import {Lexicons} from 'alpheios-lexicon-client'
import { UIController, HTMLSelector, LexicalQuery, DefaultsLoader, ContentOptionDefaults, LanguageOptionDefaults, UIOptionDefaults, Options, LocalStorageArea, MouseDblClick, LongTap } from 'alpheios-components'
import State from './state'
import Template from './template.htmlf'
import interact from 'interactjs'

const ALIGNMENT_HIGHLIGHT_CLASS = 'alpheios-alignment__highlight'
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
  constructor (anchor = '#alpheios-main', doc = document, popupData = {}, panelData = {}, options = {}) {
    this.anchor = anchor
    this.doc = doc
    this.state = new State()
    this.options = new Options(DefaultsLoader.fromJSON(ContentOptionDefaults), LocalStorageArea)
    this.resourceOptions = new Options(DefaultsLoader.fromJSON(LanguageOptionDefaults), LocalStorageArea)
    if (options.ui) {
      this.uiOptions = new Options(DefaultsLoader.fromJSON(options.ui), LocalStorageArea)
    } else {
      this.uiOptions = new Options(DefaultsLoader.fromJSON(UIOptionDefaults), LocalStorageArea)
    }
    if (options.site) {
      this.siteOptions = this.loadSiteOptions(options.site)
    } else {
      this.siteOptions = []
    }
    this.maAdapter = new AlpheiosTuftsAdapter() // Morphological analyzer adapter, with default arguments
    let manifest = { version: '1.0', name: 'Alpheios Embedded Library' }
    let template = { html: Template, panelId: 'alpheios-panel-embedded', popupId: 'alpheios-popup-embedded' }
    this.ui = new UIController(this.state, this.options, this.resourceOptions, this.uiOptions, manifest, template)
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
    for (let t of trigger) {
      if (t === 'dblclick') {
        MouseDblClick.listen(selector, evt => this.handler(evt))
      } else if (t === 'touchstartx') {
        LongTap.listen(selector, evt => this.handler(evt), 5, 0)
      }
    }
    let alignments = this.doc.querySelectorAll('[data-alpheios_align_ref]')
    for (let a of alignments) {
      a.addEventListener('mouseenter', event => { this.enterAlignment(event) })
      a.addEventListener('mouseleave', event => { this.leaveAlignment(event) })
    }
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
        lexicons: Lexicons,

        lemmaTranslations: null,

        resourceOptions: this.resourceOptions,
        siteOptions: this.siteOptions,
        langOpts: { [Constants.LANG_PERSIAN]: { lookupMorphLast: true } } // TODO this should be externalized
      }
      ).getData()
    }
  }

  loadSiteOptions (siteOptions) {
    let allSiteOptions = []
    let loaded = DefaultsLoader.fromJSON(siteOptions)
    for (let site of loaded) {
      for (let domain of site.options) {
        let siteOpts = new Options(domain, LocalStorageArea)
        allSiteOptions.push({ uriMatch: site.uriMatch, resourceOptions: siteOpts })
      }
    }
    return allSiteOptions
  }

  leaveAlignment (event) {
    this.doc.querySelectorAll(`.${ALIGNMENT_HIGHLIGHT_CLASS}`).forEach(e => e.classList.remove(ALIGNMENT_HIGHLIGHT_CLASS))
  }

  enterAlignment (event) {
    let alignedTranslation = this.doc.querySelectorAll('.aligned-translation')
    let visible = false
    alignedTranslation.forEach(e => { if (e.classList.contains('visible')) { visible = true } })
    if (!visible) {
      return
    }
    let ref = event.target.dataset.alpheios_align_ref
    if (ref) {
      for (let r of ref.split(/,/)) {
        let aligned = this.doc.querySelectorAll(r)
        if (aligned) {
          event.target.classList.add(ALIGNMENT_HIGHLIGHT_CLASS)
          for (let a of aligned) {
            a.classList.add(ALIGNMENT_HIGHLIGHT_CLASS)
            let aref = a.dataset.alpheios_align_ref
            if (aref) {
              for (let ar of aref.split(/,/)) {
                let reverse = this.doc.querySelectorAll(ar)
                for (let reverseA of reverse) {
                  if (reverseA !== event.target) {
                    reverseA.classList.add(ALIGNMENT_HIGHLIGHT_CLASS)
                  }
                }
              }
            }
          }
          this.scrollToElement(aligned[0])
        }
      }
    }
  }

  scrollToElement (elem) {
    var top = elem.offsetTop
    var left = elem.offsetLeft
    var width = elem.offsetWidth
    var height = elem.offsetHeight

    while (elem.offsetParent) {
      elem = elem.offsetParent
      top += elem.offsetTop
      left += elem.offsetLeft
    }

    var moveX = 0
    var moveY = 0
    if (left < elem.ownerDocument.defaultView.pageXOffset) {
      moveX = left - elem.ownerDocument.defaultView.pageXOffset
    } else if ((left + width) >
               (elem.ownerDocument.defaultView.pageXOffset +
                elem.ownerDocument.defaultView.innerWidth)
    ) {
      moveX = (left + width) -
               (elem.ownerDocument.defaultView.pageXOffset +
                elem.ownerDocument.defaultView.innerWidth)
    }

    if (top < elem.ownerDocument.defaultView.pageYOffset) {
      moveY = top - elem.ownerDocument.defaultView.pageYOffset
    } else if ((top >= elem.ownerDocument.defaultView.pageYOffset) &&
                ((top + height) >
                 (elem.ownerDocument.defaultView.pageYOffset +
                  elem.ownerDocument.defaultView.innerHeight)
                )
    ) {
      moveY =
              (top + height) -
              (elem.ownerDocument.defaultView.pageYOffset +
               elem.ownerDocument.defaultView.innerHeight)
    }
    if (moveX !== 0 || moveY !== 0) {
      elem.ownerDocument.defaultView.scrollBy(moveX, moveY)
    }
  }
}

export {Embedded}
