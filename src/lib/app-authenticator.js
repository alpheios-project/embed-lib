/* global Auth0Lock */
/**
 * Encapsulates Authentication Functionality For a Client Side Application
 */
export default class AppAuthenticator {
  /**
   * @constructor
   */
  constructor () {
    // An Auth0 Lock widget instance. Will be initialized lazily
    this.auth0Lock = null
    this._auth0profile = null // A user profile from Auth0
  }

  /**
   * a link for login external to the alpheios components
   * @return null for client side login
   */
  loginUrl() {
    return null
  }

  /**
   * a link for logout external to the alpheios components
   * @return null for client side login
   */
  logoutUrl() {
    return null
  }

  /**
   * session request unimplemented for app auth
   */
   session () {
     return new Promise((resolve,reject) => {
       reject(new Error("Session request not supported"))
    })
   }

  /**
   * Authenticates user with an Auth0.
   * @return {Promise}
   */
  authenticate () {
    // TODO we should check to see if we already have a valid idToken before
    // initiating authentication
    return new Promise((resolve, reject) => {
      if (!this.auth0Lock) {
        if (!auth0Env) {
          let error = `Unable to find Auth0 configuration. Auth0 functionality will be disabled`
          console.error(error)
          reject(error)
        }
        this.auth0env = auth0Env
        // test environment
        if (this.auth0env.TEST_ID) {
          localStorage.setItem('access_token', this.auth0env.TEST_ID)
          localStorage.setItem('id_token', this.auth0env.TEST_ID)
          localStorage.setItem('is_test_user', true)
          resolve("Authenticated")
        } else {
          // initialize auth0 lock
          this.auth0Lock = new Auth0Lock(this.auth0env.CLIENT_ID, this.auth0env.DOMAIN, {
            theme: {
              logo: 'https://alpheios.net/logos/alpheios_32.png',
              labeledSubmitButton: false,
              primaryColor: '#436476'
            },
            languageDictionary: {
              title: "Login",
              signUpTerms: "By signing up, you agree to our terms of service and <a href=\"https://alpheios.net/pages/privacy-policy\">privacy policy</a>."
            },
            auth: {
              redirect: false,
              params: {
                audience: this.auth0env.AUDIENCE,
                scope: 'openid profile email',
                prompt: 'consent select_account',
              },
              responseType: 'token id_token'
            }
          })
          // Handle login
          this.auth0Lock.on('authenticated', (authResult) => {
            this.auth0Lock.hide()
            localStorage.setItem('access_token', authResult.accessToken)
            localStorage.setItem('id_token', authResult.idToken)
            //localStorage.setItem('profile', JSON.stringify(profile))
            resolve("Authenticated")
          })

          // Unrecoverable error handler
          this.auth0Lock.on('unrecoverable_error', (error) => {
            console.error(`Auth0 Lock unrecoverable error: `, error)
            reject('Auth0 Lock unrecoverable')
          })

          // An authorization error
          this.auth0Lock.on('authorization_error', (error) => {
            console.error(`Auth0 Lock authorization error: `, error)
            reject('Auth0Lock authorization error')
          })
          this.auth0Lock.show()
          // TODO: Handle a situation when `authenticated` event is never fired (is that ever possible)
          // maybe via a Timeout?
        }
      }
    })
  }

  /**
   * Retrieves user profile information from Auth0.
   * @return {Promise}
   */
  getProfileData () {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('access_token')
      if (!token) {
       console.error('You must login to call this protected endpoint!')
       reject('Login required')
      }
      if (localStorage.getItem('is_test_user')) {
          let testProfile =  {
            name: 'Alpheios Test User',
            nickname: 'testuser',
            sub: 'testuser'
          }
          localStorage.setItem('profile', JSON.stringify(testProfile))
          resolve(testProfile)
      } else {
        this.auth0Lock.getUserInfo(token, (error, profile) => {
          if (error) {
            reject(error)
          } else {
            localStorage.setItem('profile', JSON.stringify(profile))
            resolve(profile)
          }
        })
      }
    })
  }

  /**
   * Retrieves user data from a remote provider (e.g. Alpheios servers).
   * @return {Promise}
   */
  getUserData () {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('access_token')

      // block request from happening if no JWT token present
      if (!token) {
       console.error('You must login to call this protected endpoint!')
       reject('Not Authenticated')
      }
      resolve(token)
    })
  }

  /**
   * Retrieves the list of configured endpoints for the environment
   * @return {Object}
   */
  getEndPoints () {
    return this.auth0env.ENDPOINTS
  }

  /**
   * Respond to a logout request
   */
  logout() {
    localStorage.removeItem('id_token')
    localStorage.removeItem('access_token')
    localStorage.removeItem('profile')
    this.auth0Lock.logout({
      returnTo: this.auth0env.LOGOUT_URL
    })
  }

}
