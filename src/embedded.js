/* eslint-env jest */
/* global Event */
import State from './state'
import { version as packageVersion, build as packageBuild, description as packageDescription } from '../package.json'
import AppAuthenticator from './lib/app-authenticator'
import SessionAuthenticator from './lib/session-authenticator'
// A variable that will store an instance of the imported components module
let components

/**
 * Imports dynamic dependencies that are required for the embed-lib.
 * @param {object} options - A configuration object of the import function.
 * @param {'production' | 'development' | 'cdn' | 'custom'} options.mode - What type of libraries shall be imported.
 *         'production' - will load minified version of libraries from a `dist/lib` local directory;
 *         'development' - will load non-optimized libraries with source maps from a `dist/lib` local directory;
 *         'cdn' - will load the latest version of minified libraries from JSDelivr (this is a default value);
 *         'custom' - allows to specify your own paths for loading the libraries. The paths shall be specified
 *                    as values of keys of a `libs` object.
 * @param {object} options.libs - An object whose properties specify paths from where libraries to be loaded.
 *        {string} options.libs.components - A path to a components library. Value for a default `production` mode
 *                 is `./lib/alpheios-components.min.js`.
 * @return {Promise} - A promise that is resolved when all dependencies are loaded
 * or rejected when there was an error during an import.
 */
export function importDependencies (options) {
  let libs = {}
  switch (options.mode) {
    case 'production':
      libs.components = './lib/alpheios-components.min.js'
      break
    case 'development':
      libs.components = './lib/alpheios-components.js'
      break
    case 'custom':
      libs = options.libs
      break
    case 'cdn':
    default:
      libs.components = 'https://cdn.jsdelivr.net/npm/alpheios-components@latest/dist/alpheios-components.min.js'
      break
  }
  return new Promise((resolve, reject) => {
    let imports = []
    let componentsImport = import(
      /* webpackIgnore: true */
      libs.components
    ).then(() => {
      console.info(`Components library has been imported successfully`)
      components = window.AlpheiosComponents
    })
    imports.push(componentsImport)

    Promise.all(imports).then(() => {
      console.info(`All promises have been imported successfully`)
      resolve (Embedded)
    }).catch((e) => {
      reject(e)
    })
  })
}

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
   */
  constructor ({
    clientId = null,
    documentObject = document,
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
    disableTextSelection = false,
    textLangCode = null,
    } = {}) {
    this.clientId = clientId

    if (this.clientId === null) {
      throw new Error('Please identify the site.')
    }
    // TODO at some point in the future we may add authentication of
    // clientId
    this.doc = documentObject
    this.state = new State()
    this.enabledSelector = enabledSelector
    this.disabledSelector = disabledSelector
    this.enabledClass = enabledClass
    this.disabledClass = disabledClass
    this.triggerEvents = triggerEvents
    this.triggerPreCallback = triggerPreCallback

    // Set an initial UI Controller state for activation
    this.state.setPanelClosed() // A default state of the panel is CLOSED
    this.state.tab = 'info' // A default tab is "info"

    this.ui = components.UIController.create(this.state, {
      storageAdapter: components.LocalStorageArea,
      textQueryTrigger: this.triggerEvents,
      textQuerySelector: this.enabledSelector,
      app: { version:`${packageVersion}.${packageBuild}`, name: packageDescription },
      // Disable text selection on mobile devices
      disableTextSelection: disableTextSelection,
      textLangCode: textLangCode
    })
    // Environment-specific initializations
    if (typeof auth0Env !== 'undefined') {
      // Register an authentication module only with authentication environment is loaded
      this.ui.registerModule(components.AuthModule, { auth: new AppAuthenticator() })
    } else if (typeof serverEnv !== 'undefined') {
      this.ui.registerModule(components.AuthModule, { auth: new SessionAuthenticator(serverEnv) })
    } else {
      console.log("No auth0Env or serverEnv")
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

  get platform () {
    return this.ui.platform
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
    let alignmentTranslation = components.UIController.initAlignedTranslation(this.doc, '.aligned-translation',
      {
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
      },
      event => {
        let target = event.target
        // update the element's style
        target.style.width = `${event.rect.width}px`
      })
    return this
  }

  openToolbar () {
    this.ui.openToolbar()
  }

  openActionPanel () {
    this.ui.openActionPanel()
  }

  closeActionPanel () {
    this.ui.closeActionPanel()
  }

  /**
   * Opens the action panel with toolbar buttons hidden and only the lookup visible.
   */
  openActionPanelLookup () {
    this.ui.openActionPanel({ showNav: false })
  }

  /**
   * Opens the action panel with only toolbar buttons visible.
   */
  openActionPanelToolbar () {
    this.ui.openActionPanel({ showLookup: false })
  }
}
