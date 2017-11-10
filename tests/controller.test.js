/* eslint-env jest */
const T = require('../dist/alpheios-wordsvc.js')

describe('WordSvc object', () => {
  'use strict'

  const Jsdom = require('jsdom')

  let Svc

  let polyfillClosest = function (selector) {
    var el = this
    do {
      if (el.matches(selector)) return el
      el = el.parentElement
    } while (el !== null)
    return null
  }

  beforeAll(() => {
        // Create a test environment
    let anchor = document.createElement('div')
    anchor.setAttribute('id', 'myanchor')
    anchor.setAttribute('data-selector', '.alpheios-enabled')
    anchor.setAttribute('data-trigger', '.click')
    document.querySelector('body').appendChild(anchor)
    Svc = new T(['#myanchor'], document)
  })

  test('Should be initialized properly', () => {
    expect(Svc.anchor).toEqual(['#myanchor'])
    expect(Svc.doc).toEqual(document)
  })

  test('we find an embedded language properly', () => {
    let doc = new Jsdom.jsdom('<!doctype html><html><body><div lang="grc"><div id="closest" lang="lat"><div id="latembed"></div></div></div></body></html>') // eslint-disable-line new-cap
    let el = doc.getElementById('latembed')
    el.closest = polyfillClosest
    console.log(Svc)
    let sw = Svc.getSourceSelection(el, null)
    expect(sw.language.toCode()).toEqual('lat')
  })

  test('we find an embedded xml language properly', () => {
    let doc = new Jsdom.jsdom('<!doctype html><html><body><div lang="grc"><div id="closest" xml:lang="lat"><div id="latembed"></div></div></div></body></html>') // eslint-disable-line new-cap
    let el = doc.getElementById('latembed')
    el.closest = polyfillClosest
    let sw = Svc.getSourceSelection(el, null)
    expect(sw.language.toCode()).toEqual('grc')
  })
})
