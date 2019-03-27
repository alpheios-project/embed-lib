/* global Auth0Lock */
/**
 * Encapsulates Authentication Functionality For a Client Side Application
 */
export default class SessionAuthenticator {
  /**
   * @constructor
   */
  constructor (env) {
      this.sessionUrl = serverEnv.SESSION_URL
      this.tokenUrl = serverEnv.TOKEN_URL
      this.endpoints = serverEnv.ENDPOINTS
  }

  /**
   * Whether or not this authentication module supports login
   * @return {Boolean} false for server side auth
   */
  enableLogin() {
    return false
  }


  session () {
    return new Promise((resolve,reject) => {
      window.fetch(this.sessionUrl).then((resp) => {
        if (! resp.ok) {
          reject(resp.code)
        } else {
          resolve(resp.json())
        }
      })
    })
  }

  authenticate () {
    // TODO we should check to see if we already have a valid idToken before
    // initiating authentication
    return new Promise((resolve, reject) => {
      reject("Server Side Authenticator")
    })
  }

  getUserData () {
    return new Promise((resolve,reject) => {
      window.fetch(this.tokenUrl).then((resp) => {
        if (! resp.ok) {
          reject(resp.code)
        } else {
          resolve(resp.json())
        }
      })
    })
  }

  /**
   * Retrieves the list of configured endpoints for the environment
   * @return {Object}
   */
  getEndPoints () {
    return this.endpoints
  }

  /**
   * Respond to a logout request
   */
  logout() {
    console.error("Logout called from Server Side Authenticator")
    return
  }

}
