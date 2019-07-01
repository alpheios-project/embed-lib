window["AlpheiosEmbed"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./embedded.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../package.json":
/*!***********************!*\
  !*** ../package.json ***!
  \***********************/
/*! exports provided: name, version, build, description, main, directories, scripts, repository, author, license, bugs, homepage, devDependencies, engines, jest, eslintConfig, standard, dependencies, default */
/***/ (function(module) {

module.exports = {"name":"alpheios-embedded","version":"1.0.0","build":"25","description":"Alpheios Embedded Library","main":"dist/alpheios-embedded.js","directories":{"doc":"doc"},"scripts":{"test":"eslint --fix src/**/*.js && jest --coverage && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","build":"eslint --fix src/**/*.js && node --experimental-modules ./node_modules/alpheios-node-build/dist/build.mjs all all vue && node --experimental-modules ./node_modules/alpheios-node-build/dist/files.mjs replace --s=./node_modules/alpheios-components/dist/style --t=dist/style","build-prod":"eslint --fix src/**/*.js && node --experimental-modules ./node_modules/alpheios-node-build/dist/build.mjs all production vue && node --experimental-modules ./node_modules/alpheios-node-build/dist/files.mjs replace --s=./node_modules/alpheios-components/dist/style --t=dist/style","build-dev":"eslint --fix src/**/*.js && node --experimental-modules ./node_modules/alpheios-node-build/dist/build.mjs all development vue && node --experimental-modules ./node_modules/alpheios-node-build/dist/files.mjs replace --s=./node_modules/alpheios-components/dist/style --t=dist/style","auth0-env-update":"node --experimental-modules ./node_modules/alpheios-node-build/dist/files.mjs replace --s=../protected-config/auth0/prod --t=dist/auth0 --f=env-embed.js","auth0-env-dev-update":"node --experimental-modules ./node_modules/alpheios-node-build/dist/files.mjs replace --s=../protected-config/auth0/dev --t=dist/auth0 --f=env-embed.js","lint":"eslint --fix src/**/*.js","update-dependencies":"node --experimental-modules ./node_modules/alpheios-node-build/dist/files.mjs replace --s=./node_modules/alpheios-components/dist/ --t=dist/lib --f=alpheios-components.js --f=alpheios-components.js.map --f=alpheios-components.min.js && node --experimental-modules ./node_modules/alpheios-node-build/dist/files.mjs replace --s=./node_modules/interactjs/dist/ --t=dist/lib --f=interact.js --f=interact.js.map --f=interact.min.js --f=interact.min.js.map","build-prod-experimental":"node --experimental-modules ./node_modules/alpheios-node-build/dist/build.mjs webpack production app config.mjs && npm run update-dependencies","build-dev-experimental":"node --experimental-modules ./node_modules/alpheios-node-build/dist/build.mjs webpack development app config.mjs && npm run update-dependencies","dev":"npm run build-dev && http-server -c-1 -p 8888 & onchange src -- npm run build-dev"},"repository":{"type":"git","url":"git+https://github.com/alpheios-project/wordsvc.git"},"author":"The Alpheios Project, Ltd.","license":"ISC","bugs":{"url":"https://github.com/alpheios-project/wordsvc/issues"},"homepage":"https://github.com/alpheios-project/wordsvc#readme","devDependencies":{"alpheios-client-adapters":"github:alpheios-project/client-adapters","alpheios-components":"github:alpheios-project/components#code-optimization","alpheios-data-models":"github:alpheios-project/data-models","alpheios-experience":"github:alpheios-project/experience","alpheios-inflection-tables":"git://github.com/alpheios-project/inflection-tables.git","alpheios-node-build":"github:alpheios-project/node-build#code-analysis","alpheios-res-client":"github:alpheios-project/res-client","alpheios-wordlist":"github:alpheios-project/wordlist","coveralls":"^3.0.4","css-loader":"^3.0.0","eslint":"^6.0.1","eslint-config-standard":"^12.0.0","eslint-plugin-import":"^2.18.0","eslint-plugin-node":"^9.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.0","eslint-plugin-vue":"^5.2.3","html-loader":"^0.5.5","html-loader-jest":"^0.2.1","http-server":"^0.11.1","interactjs":"^1.4.11","intl-messageformat":"^2.2.0","jest":"^24.8.0","jest-fetch-mock":"^2.1.2","onchange":"^6.0.0","raw-loader":"^3.0.0","sass-loader":"^7.1.0","source-map-loader":"^0.2.4","style-loader":"^0.23.1","url-loader":"^2.0.1","vue-loader":"^15.7.0","vue-style-loader":"^4.1.2","vue-svg-loader":"^0.12.0","webpack-dev-server":"^3.7.2"},"engines":{"node":">= 9.10.1","npm":">= 5.6.0"},"jest":{"verbose":true,"transform":{"^.+\\.htmlf$":"html-loader-jest","^.+\\.jsx?$":"babel-jest"},"transformIgnorePatterns":["node_modules/alpheios-components/"]},"eslintConfig":{"env":{"browser":true,"node":true},"parserOptions":{"ecmaVersion":2018,"sourceType":"module"}},"standard":{"ignore":["**/dist","**/support"]},"dependencies":{}};

/***/ }),

/***/ "./embedded.js":
/*!*********************!*\
  !*** ./embedded.js ***!
  \*********************/
/*! exports provided: importDependencies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importDependencies", function() { return importDependencies; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./state.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../package.json */ "../package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "../package.json", 1);
/* harmony import */ var _lib_app_authenticator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/app-authenticator */ "./lib/app-authenticator.js");
/* harmony import */ var _lib_session_authenticator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/session-authenticator */ "./lib/session-authenticator.js");
/* eslint-env jest */
/* global Event */
//import ComponentStyles from '../node_modules/alpheios-components/dist/style/style.min.css' // eslint-disable-line
//import { UIController, LocalStorageArea, AlignmentSelector,
//  AuthModule, PanelModule, PopupModule, ToolbarModule, ActionPanelModule } from 'alpheios-components'

// TODO: interact.js is imported by both components and embed-lib. Need to eliminate duplication
// import interact from 'interactjs'



// A variable that will store an instance of the imported components module
let components
let interact

/* eslint-disable */
function importDependencies (options = { mode: 'production' }) {
  let lib = {}
  switch (options.mode) {
    case 'development':
      lib.components = 'alpheios-components.min.js'
      lib.interact = 'interact.min.js'
      break
    default:
      lib.components = 'alpheios-components.js'
      lib.interact = 'interact.js'
  }
  return new Promise((resolve, reject) => {
    let componentsImport = import(
      /* webpackIgnore: true */
      `./lib/${lib.components}`
      )

    let interactImport = import(
      /* webpackIgnore: true */
      `./lib/${lib.interact}`
      )

    componentsImport
      .then(() => {
        // Assign a components module imported as a prop of `windows` to the `components` var
        console.info(`Components library has been imported successfully`)
        components = window.AlpheiosComponents
      })
      .catch(e => {
        console.info(`Components import error`)
        reject(e)
      })

    interactImport
      .then((interactModule) => {
        // Assign a components module imported as a prop of `windows` to the `components` var
        console.info(`Interact.js library has been imported successfully`)
        console.log(interactModule)
        interact = interactModule
        window.interact = interactModule
      })
      .catch(e => {
        console.info(`Interact import error`)
        reject(e)
      })

    Promise.all([componentsImport]).then(() => {
      console.info(`All promises have been imported successfully`)
      resolve (Embedded)
    })
  })
}
/* eslint-enable */

/**
 * Encapsulation of Alpheios functionality which can be embedded in a webpage
 */
class Embedded {
  /**
   * @constructor
   * @param {Object} arguments - object with the following properties:
   *     clientId: a string identifying the embedding client or site. Required.
   *     documentObject: the parent document. Default: window.document
   *     enabledSelector: a CSS Selector string identifying the page elements for which Alpheios should be activated
   *                      Default: ".alpheios-enabled"
   *     disabledSelector: a CSS Selector string identifying the page elements for which Alpheios should be deactivated
   *                       Default: [data-alpheios-ignore="all"]
   *     enabledClass: a CSS class to apply to alpheios/staten enabled elements
   *                   Default: ""
   *     disabledClass: a CSS class to apply to alpheios disabled elements
   *                    Default: ""
   *     eventTriggers: a comma-separated list of DOM events to which Alpheios functionality should be attached
   *                    Default: "dblclick"
   *     triggerPreCallback: a callback function which is called when the trigger event handler is invoked, prior to initiating
   *                         Alpheios functionality. It should return true to proceed with lookup or false to abort.
   *                         Default: no-op, returns true
   *     mobileRedirectUrl: a URL to which to direct users if they use a mobile device to access a page which has Alpheios embedded
   */
  constructor ({
    clientId = null,
    documentObject = document,
    mobileRedirectUrl = null,
    enabledSelector = '.alpheios-enabled',
    disabledSelector = '',
    enabledClass = '',
    disabledClass = '',
    triggerEvents = 'dblclick',
    triggerPreCallback = (evt) => { return true }, // Not used at the moment but can be set as a filter for `this.ui.getSelectedText()` calls
    popupInitialPos = {},
    toolbarInitialPos = {},
    layoutType = 'default', // The other option is 'readingTools'
    // Disable text selection on mobile devices
    disableTextSelection = false
    } = {}) {
    this.clientId = clientId

    if (this.clientId === null) {
      throw new Error('Please identify the site.')
    }
    // TODO at some point in the future we may add authentication of
    // clientId
    this.doc = documentObject
    this.state = new _state__WEBPACK_IMPORTED_MODULE_0__["default"]()
    this.mobileRedirectUrl = mobileRedirectUrl
    this.enabledSelector = enabledSelector
    this.disabledSelector = disabledSelector
    this.enabledClass = enabledClass
    this.disabledClass = disabledClass
    this.triggerEvents = triggerEvents
    this.triggerPreCallback = triggerPreCallback

    let pckg
    try {
      pckg = _package_json__WEBPACK_IMPORTED_MODULE_1__
    } catch (e) {
      throw new Error(`Cannot parse package.json, its format is probably incorrect`)
    }

    // Set an initial UI Controller state for activation
    this.state.setPanelClosed() // A default state of the panel is CLOSED
    this.state.tab = 'info' // A default tab is "info"

    this.ui = components.UIController.create(this.state, {
      storageAdapter: components.LocalStorageArea,
      textQueryTrigger: this.triggerEvents,
      textQuerySelector: this.enabledSelector,
      app: { version:`${pckg.version}.${pckg.build}`, name: pckg.description },
      // Disable text selection on mobile devices
      disableTextSelection: disableTextSelection
    })
    // Environment-specific initializations
    if (typeof auth0Env !== 'undefined') {
      // Register an authentication module only with authentication environment is loaded
      this.ui.registerModule(components.AuthModule, { auth: new _lib_app_authenticator__WEBPACK_IMPORTED_MODULE_2__["default"]() })
    } else if (typeof serverEnv !== 'undefined') {
      this.ui.registerModule(components.AuthModule, { auth: new _lib_session_authenticator__WEBPACK_IMPORTED_MODULE_3__["default"](serverEnv.sessionUrl) })
    } else {
      this.ui.registerModule(components.AuthModule, { auth: null })
    }
    // Register UI modules
    this.ui.registerModule(components.PanelModule, {})

    let popupParams = {}
    if (popupInitialPos && Object.values(popupInitialPos).filter(value => Boolean(value)).length > 0) {
      popupParams.initialPos = popupInitialPos
    }
    this.ui.registerModule(components.PopupModule, popupParams)

    if (layoutType === 'default') {
      let toolbarParams = {}
      if (toolbarInitialPos && Object.values(toolbarInitialPos).filter(value => Boolean(value)).length > 0) {
        toolbarParams.initialPos = toolbarInitialPos
      }

      this.ui.registerModule(components.ToolbarModule, toolbarParams)
      this.ui.registerModule(components.ActionPanelModule)
    } else if (layoutType === 'readingTools') {
      // This is a special configuration for Alpheios Reading Tools
      if (this.ui.platform.isDesktop) {
        let toolbarParams = {}
        if (toolbarInitialPos && Object.values(toolbarInitialPos).filter(value => Boolean(value)).length > 0) {
          toolbarParams.initialPos = toolbarInitialPos
        }

        this.ui.registerModule(components.ToolbarModule, toolbarParams)
      } else if (this.ui.platform.isMobile) {
        this.ui.registerModule(components.ActionPanelModule, {
          lookupResultsIn: 'panel'
        })
      }
    }
  }

  notifyExtension () {
    this.doc.body.dispatchEvent(new Event('Alpheios_Embedded_Response'))
  }

  async activate () {
    try {
      /**
       * Notify extension that an embedded lib is present.
       * We need to do this right after an activation.
       * If webextension is loaded sooner than the embedded library
       * than the extension will have no information about
       * the embedded library presence unless explicitly notified by us.
       */
      this.notifyExtension()

      // await this.ui.init() // Activate will call `init()` if has not been initialized previously
      await this.ui.activate()

      // Set a body attribute so the content scrip will know if embedded library is active on a page
      this.doc.body.setAttribute('alpheios-embed-lib-status', 'active')
      this.doc.body.addEventListener('Alpheios_Embedded_Check', event => { this.notifyExtension(event) })

    } catch (error) {
      console.error(`Cannot activate a UI controller: ${error}`)
      return
    }

    if (this.mobileRedirectUrl && this.detectMobile()) {
      document.location = this.mobileRedirectUrl
    }
    let selector = this.enabledSelector

    let trigger = this.triggerEvents.split(/,/)
    if (!selector || !trigger) {
      throw new Error('Configuration must define both trigger and selector')
    }
    let activateOn = this.doc.querySelectorAll(selector)
    if (activateOn.length === 0) {
      // it could be that we want to activate Alpheios for lookups via the 
      // tools even if there isn't any text on the page to activate to on
      // so just print a warning here.
      console.log(`No elements matching ${activateOn}`)
    }
    if (this.enabledClass) {
      for (let elem of activateOn) {
        elem.classList.add(this.enabledClass)
      }
    }
    if (this.disabledSelector) {
      let disableOn = this.doc.querySelectorAll(this.disabledSelector)
      for (let elem of disableOn) {
        elem.setAttribute('data-alpheios-ignore', 'all')
        if (this.disabledClass) {
          elem.classList.add(this.disabledClass)
        }
      }
    }

    let alignment = new components.AlignmentSelector(this.doc, {})
    alignment.activate()
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

  get platform () {
    return this.ui.platform
  }

  openToolbar () {
    this.ui.openToolbar()
  }

  openActionPanel () {
    this.ui.openActionPanel()
  }

  /**
   *  Detect mobile device
   */
  detectMobile () {
    if (window.sessionStorage.desktop) {
      return false
    } else if (window.localStorage.mobile) {
      return true
    }

    // alternative
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile']
    for (var i in mobile) {
      if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) {
        return true
      }
    }

    // nothing found.. assume desktop
    return false
  }
}

// export { importEmbedDependencies }


/***/ }),

/***/ "./lib/app-authenticator.js":
/*!**********************************!*\
  !*** ./lib/app-authenticator.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppAuthenticator; });
/* global Auth0Lock */
/**
 * Encapsulates Authentication Functionality For a Client Side Application
 */
class AppAuthenticator {
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
              signUpTerms: "By signing up, you agree to our <a href=\"https://alpheios.net/pages/userterms\" target=\"_blank\">terms of service</a> and <a href=\"https://alpheios.net/pages/privacy-policy\">privacy policy</a>."
            },
            mustAcceptTerms: true,
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


/***/ }),

/***/ "./lib/session-authenticator.js":
/*!**************************************!*\
  !*** ./lib/session-authenticator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SessionAuthenticator; });
/* global Auth0Lock */
/**
 * Encapsulates Authentication Functionality For a Client Side Application
 */
class SessionAuthenticator {
  /**
   * @constructor
   */
  constructor (env) {
      this.sessionUrl = serverEnv.SESSION_URL
      this.tokenUrl = serverEnv.TOKEN_URL
      this.endpoints = serverEnv.ENDPOINTS
      this._loginUrl = serverEnv.LOGIN_URL
      this._logoutUrl = serverEnv.LOGOUT_URL
  }

  /**
   * Login link for server
   * @return {String} login link from config
   */
  loginUrl() {
    return this._loginUrl
  }

  /**
   * Logout link for server
   * @return {String} logout link from config
   */
  logoutUrl() {
    return this._logoutUrl
  }

  session () {
    return new Promise((resolve,reject) => {
      window.fetch(this.sessionUrl).then((resp) => {
        if (! resp.ok) {
          reject(resp.code)
        } else {
          resolve(resp.json())
        }
      }).catch((error) => {
        reject(`Session request failed ${error}`)
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
      }).catch((error) => {
        reject(`token request failed ${error}`)
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


/***/ }),

/***/ "./state.js":
/*!******************!*\
  !*** ./state.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return State; });
/**
 * Contains Alpheios state
 * @property {panelStatus} panelStatus
 */
class State {
  constructor (tabID) {
    this.panelStatus = undefined
    this.tab = undefined
    this.watchers = new Map()
  }

  static create (source) {
    let copy = new State()
    for (let key of Object.keys(source)) {
      copy[key] = source[key]
    }
    return copy
  }

  static get defaults () {
    return {
      panelStatus: State.statuses.panel.OPEN
    }
  }

  static get statuses () {
    return {
      embedLib: {
        PENDING: Symbol.for('Alpheios_Status_Pending'), // Has not been fully initialized yet
        ACTIVE: Symbol.for('Alpheios_Status_Active'), // Is loaded and active
        DEACTIVATED: Symbol.for('Alpheios_Status_Deactivated'), // Has been loaded, but is deactivated
        DISABLED: Symbol.for('Alpheios_Status_Disabled') // Has been loaded, but it is disabled
      },
      panel: {
        OPEN: Symbol.for('Alpheios_Status_PanelOpen'), // Panel is open
        CLOSED: Symbol.for('Alpheios_Status_PanelClosed'), // Panel is closed
        DEFAULT: Symbol.for('Alpheios_Status_PanelDefault') // Panel should set its state according to default values
      },
      tab: {
        DEFAULT: 'default' // A tab should be set according to default values
      }
    }
  }

  /**
   * Sets a watcher function that is called every time a property is changed using a setItem() method.
   * @param {String} property - A name of a property that should be monitored
   * @param {Function} watchFunc - A function that will be called every time a property changes
   * @return {State} Reference to self for chaining
   */
  setWatcher (property, watchFunc) {
    this.watchers.set(property, watchFunc)
    return this
  }

  /**
   * SetItem provides a monitored way to change state. If value is assigned to a data property directly
   * there is no way to know if a property was changed. However, if a property was changed using setItem() method,
   * and if there is a watcher function registered for a changed property name,
   * this function will be called on every property change, passing a changed property name as an argument.
   * @param key
   * @param value
   * @return {State}
   */
  setItem (key, value) {
    this[key] = value
    if (this.watchers && this.watchers.has(key)) {
      this.watchers.get(key)(key, this)
    }
    return this
  }

  isPanelOpen () {
    return this.panelStatus === State.statuses.panel.OPEN
  }

  isPanelClosed () {
    return this.panelStatus === State.statuses.panel.CLOSED
  }

  isPanelStateDefault () {
    return this.panelStatus === State.statuses.panel.DEFAULT
  }

  isPanelStateValid () {
    return (
      this.panelStatus === State.statuses.panel.OPEN ||
      this.panelStatus === State.statuses.panel.CLOSED
    )
  }

  setPanelOpen () {
    this.setItem('panelStatus', State.statuses.panel.OPEN)
    return this
  }

  setPanelClosed () {
    this.setItem('panelStatus', State.statuses.panel.CLOSED)
    return this
  }

  changeTab (tabName) {
    this.setItem('tab', tabName)
    return this
  }

  activateUI () {
    this.setItem('uiActive', true)
    return this
  }

  // TODO: A temporary solution for compatibility with TabScript.
  isActive () {
    return this.status === State.statuses.embedLib.ACTIVE
  }

  isDeactivated () {
    return this.status === State.statuses.embedLib.DEACTIVATED
  }

  isDisabled () {
    return this.status === State.statuses.embedLib.DISABLED
  }

  isTabStateDefault () {
    return this.tab === State.statuses.tab.DEFAULT
  }

  uiIsActive () {
    return this.uiActive
  }

  activate () {
    this.status = State.statuses.embedLib.ACTIVE
    return this
  }

  deactivate () {
    this.status = State.statuses.embedLib.DEACTIVATED
    return this
  }

  disable () {
    this.status = State.statuses.embedLib.DISABLED
    return this
  }
}


/***/ })

/******/ });
//# sourceMappingURL=alpheios-embedded.js.map