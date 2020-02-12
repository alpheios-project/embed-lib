/* eslint-env jest */
import { Embedded } from '../src/embedded.js'

describe('WordSvc object', () => {
  beforeAll(() => {
  })

  test.skip('Should be initialized properly', () => {
    let Svc = new Embedded('#myanchor', document)
    expect(Svc.anchor).toEqual('#myanchor')
    expect(Svc.doc).toEqual(document)
  })

  test.skip('Initialization with default element', () => {
    let Svc = new Embedded()
    expect(Svc.anchor).toEqual('#alpheios-main')
  })

  test.skip('Activation with missing default element throws error', () => {
    let Svc = new Embedded()
    expect(Svc.anchor).toEqual('#alpheios-main')
    expect(() => {
      Svc.activate()
    }).toThrow()
  })
})
