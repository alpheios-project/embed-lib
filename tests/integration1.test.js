/* eslint-env jest */
/* eslint-disable no-unused-vars */
import 'whatwg-fetch'
import Embedded from '@/embedded.js'

describe('sync-async.test.js', () => {
  console.error = function () {}
  console.log = function () {}
  console.warn = function () {}
  
  beforeEach(() => {
    jest.spyOn(console, 'error')
    jest.spyOn(console, 'log')
    jest.spyOn(console, 'warn')
  })
  afterEach(() => {
    jest.resetModules()
  })
  afterAll(() => {
    jest.clearAllMocks()
  })
  
  function timeout (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  
  function timeNow () {
    return ((this.getHours() < 10) ? '0' : '') + this.getHours() + ':' + ((this.getMinutes() < 10) ? '0' : '') + this.getMinutes() + ':' + ((this.getSeconds() < 10) ? '0' : '') + this.getSeconds()
  }

  it('1 - on activate it adds panel and popup to the HTML layout', async () => {
    
  })
})