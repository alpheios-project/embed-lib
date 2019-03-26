/* global Auth0Lock */
/**
 * Encapsulates Authentication Functionality For a Client Side Application
 */
export default class Sessionuthenticator {
  /**
   * @constructor
   */
  constructor (sessionUrl) {
      this.sessionUrl = sessionUrl
  }

  session () {
    return window.fetch(sessionUrl)
  }

  authenticate () {
    // TODO we should check to see if we already have a valid idToken before
    // initiating authentication
    return new Promise((resolve, reject) => {
      reject("Server Side Authenticator")
    })
  }

  getUserData () {
    return new Promise((resolve, reject) => {
      resolve("alpheios:session")
    })
  }

  /**
   * Respond to a logout request
   */
  logout() {
    console.error("Logout called from Server Side Authenticator")
    return
  }

}
