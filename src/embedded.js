/* eslint-env jest */
/* global Event, BUILD_BRANCH, BUILD_NUMBER, BUILD_NAME */
import State from './state'
import { version as packageVersion, description as packageDescription } from '../package.json'
// A variable that will store an instance of the imported components module
let components, datamodels

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
  let libPaths = {}
  let libraries = {}
  switch (options.mode) {
    case 'production':
      libPaths.components = './lib/alpheios-components.min.js'
      libPaths.datamodels = './lib/alpheios-data-models.min.js'
      break
    case 'development':
      libPaths.components = './lib/alpheios-components.js'
      libPaths.datamodels = './lib/alpheios-data-models.js'
      break
    case 'custom':
      libs = options.libs
      break
    case 'cdn':
    default:
      libs.components = 'https://cdn.jsdelivr.net/npm/alpheios-components@latest/dist/alpheios-components.min.js'
      break
  }

  const importDep = (libAlias, libName) => {
    const libImport = import(
      /* webpackIgnore: true */
      libPaths[libAlias]
    ).then(() => {
      libraries[libAlias] = window[libName]
    })
    return libImport
  }

  return new Promise((resolve, reject) => {
    let imports = []

    imports.push(importDep('components', 'AlpheiosComponents'))
    imports.push(importDep('datamodels', 'AlpheiosDataModels'))

    Promise.all(imports).then(() => {
      components = libraries.components
      datamodels = libraries.datamodels
      resolve (Embedded)
    }).catch((e) => {
      reject(e)
    })
  })
}

/**
 * Encapsulation of Alpheios functionality which can be embedded in a webpage
 */
export class Embedded {
  /**
   * @constructor
   * @param {Object} arguments - object with the following properties:
   *     clientId: a string identifying the embedding client or site. Required.
   *     authEnv: authentication environment object.(Optional)
   *     documentObject: the parent document. Default: window.document
   *     enabledSelector: a CSS Selector string identifying the page elements for which Alpheios should be activated
   *                      Default: ".alpheios-enabled"
   *     disabledSelector: a CSS Selector string identifying the page elements for which Alpheios should be deactivated
   *                       Default: [data-alpheios-ignore="all"]
   *     enabledClass: a CSS class to apply to alpheios/staten enabled elements
   *                   Default: ""
   *     disabledClass: a CSS class to apply to alpheios disabled elements
   *                    Default: ""
   *     mobileTriggerEvent: DOM Event to trigger word selection on mobile devices
   *                         Default: longTap
   *     desktopTriggerEvent: DOM Event to trigger word selection on desktops
   *                    Default: "dblclick"
   *     triggerPreCallback: a callback function which is called when the trigger event handler is invoked, prior to initiating
   *                         Alpheios functionality. It should return true to proceed with lookup or false to abort.
   *                         Default: no-op, returns true
   *     enableMouseMoveOverride: override the desktop trigger with a mousemove handler
   *     popupInitialPos: object containing initial css positioning properties for the popup
   *                      Default { top: 10vh, left: 10vw}
   *     toolbarInitialPos: object containing initial css positioning properties for the toolbar
   *                        Default { top: 10px, right: 15px}
   *     actionPanelInitialPos: object containing initial css positioning properties for the action panel (mobile)
   *                            Default { bottom: 120px, right: 20px}
   *     layoutType: 'default' or 'readingTools' (readingTools is used for the Alpheios Reader UI)
   *                 Default: 'default'
   *     disableTextSelection: set to true to disable default browser text selection behavior (not recommended)
   *                           Default: false
   *     textLangCode: default language for lookups via the toolbar
   *                   Default: null (which will result in the user preferred page language being used)
   *     overrideHelp: set to true to disable the default alpheios behavior for the help icon
   *                   (client code must attach their own handler to the ".alpheios-toolbar__help-control" element)
   *                   Default: false
   *     simpleMode: set to true to restrict the UI to the popup/morphology panel (with grammar links) and lookup but no other features
   *                 Default: false
   *     arethusaTbRefreshRetryCount: number of times to retry retrieval of treebank data before disabling the
   *                                  functionality for the treebank document
   *                                  Default: 5
   *     arethusaTbRefreshDelay: number of milliseconds to wait in between retrying treebank document requests
   *                             Default: 200,
   */
  constructor ({
    clientId = null,
    authEnv = null,
    documentObject = document,
    enabledSelector = '.alpheios-enabled',
    disabledSelector = '',
    enabledClass = '',
    disabledClass = '',
    mobileTriggerEvent = null,
    desktopTriggerEvent = null,
    triggerPreCallback = (evt) => { return true }, // Not used at the moment but can be set as a filter for `this.app.getSelectedText()` calls
    enableMouseMoveOverride = false,
    popupInitialPos = {},
    toolbarInitialPos = {},
    actionPanelInitialPos = {},
    layoutType = 'default', // The other option is 'readingTools'
    // Disable text selection on mobile devices
    disableTextSelection = false,
    textLangCode = null,
    overrideHelp = false,
    simpleMode = false,
    arethusaTbRefreshRetryCount = 5,
    arethusaTbRefreshDelay = 200
    } = {}) {

    this.clientId = clientId

    if (this.clientId === null) {
      throw new Error('Please identify the site.')
    }
    // TODO at some point in the future we may add authentication of
    // clientId
    this.doc = documentObject
    this.authEnv = authEnv
    this.state = new State()
    this.enabledSelector = enabledSelector
    this.disabledSelector = disabledSelector
    this.enabledClass = enabledClass
    this.disabledClass = disabledClass
    this.desktopTriggerEvent = desktopTriggerEvent
    this.mobileTriggerEvent = mobileTriggerEvent
    this.triggerPreCallback = triggerPreCallback
    this.enableMouseMoveOverride = enableMouseMoveOverride
    this.simpleMode = simpleMode

    // Set an initial UI Controller state for activation
    this.state.setPanelClosed() // A default state of the panel is CLOSED
    this.state.tab = 'info' // A default tab is "info"

    this._platform = new components.Platform({ appType: components.Platform.appTypes.EMBEDDED_LIBRARY })

    this.app = components.AppController.create(this.state, {
      storageAdapter: datamodels.LocalStorageArea,
      textQueryTriggerDesktop: this.desktopTriggerEvent,
      textQueryTriggerMobile: this.mobileTriggerEvent,
      textQuerySelector: this.enabledSelector,
      triggerPreCallback: this.triggerPreCallback,
      enableMouseMoveOverride: this.enableMouseMoveOverride,
      app: { version:`${packageVersion}`, buildBranch: BUILD_BRANCH, buildNumber: BUILD_NUMBER, buildName: BUILD_NAME, name: packageDescription },
      appType: components.Platform.appTypes.EMBEDDED_LIBRARY,
      clientId: this.clientId,
      // Disable text selection on mobile devices
      disableTextSelection: disableTextSelection,
      textLangCode: textLangCode,
      overrideHelp: overrideHelp,
      configServiceUrl: 'https://config.alpheios.net/v1/config',
      arethusaTbRefreshRetryCount: arethusaTbRefreshRetryCount,
      arethusaTbRefreshDelay: arethusaTbRefreshDelay
    })
    // Environment-specific initializations
    if (this.authEnv) {
      if (authEnv.CLIENT_ID) {
        // Register an authentication module only with authentication environment is loaded
        this.app.registerModule(components.AuthModule, { auth: new components.AppAuthenticator(authEnv) })
      } else if (authEnv.LOGIN_URL) {
        this.app.registerModule(components.AuthModule, { auth: new components.SessionAuthenticator(authEnv) })
      }
    } else {
      this.app.registerModule(components.AuthModule, { auth: null })
    }
    // Register UI modules
    let panelParams = {}
    if (this.simpleMode) {
      panelParams.showNav = false
    }
    this.app.registerModule(components.PanelModule, panelParams)

    let popupParams = {}
    if (popupInitialPos && Object.values(popupInitialPos).filter(value => Boolean(value)).length > 0) {
      popupParams.initialPos = popupInitialPos
    }
    if (this.simpleMode) {
      popupParams.showNav = false
    }
    this.app.registerModule(components.PopupModule, popupParams)

    let actionPanelParams = {}
    if (actionPanelInitialPos && Object.values(actionPanelInitialPos).filter(value => Boolean(value)).length > 0) {
      actionPanelParams.initialPos = actionPanelInitialPos
    }
    if (this.simpleMode) {
      actionPanelParams.showNav = false
    } else {
      actionPanelParams.showNav = true
    }

    let toolbarParams = {}
    if (this.simpleMode) {
      toolbarParams.showNav = false
    }
    if (layoutType === 'default') {
      if (toolbarInitialPos && Object.values(toolbarInitialPos).filter(value => Boolean(value)).length > 0) {
        toolbarParams.initialPos = toolbarInitialPos
      }

      this.app.registerModule(components.ToolbarModule, toolbarParams)
      this.app.registerModule(components.ActionPanelModule, { showNav: actionPanelParams.showNav })
    } else if (layoutType === 'readingTools') {
      // This is a special configuration for Alpheios Reading Tools
      if (this._platform.isDesktop) {
        if (toolbarInitialPos && Object.values(toolbarInitialPos).filter(value => Boolean(value)).length > 0) {
          toolbarParams.initialPos = toolbarInitialPos
        }

        this.app.registerModule(components.ToolbarModule, toolbarParams)
      } else if (this._platform.isMobile) {
        this.app.registerModule(components.ActionPanelModule, {
          lookupResultsIn: 'panel',
          initialPos: actionPanelParams.initialPos,
          showNav: actionPanelParams.showNav
        })
      }
    }
  }

  // TODO: Is it used by any external code?
  get platform () {
    return this._platform
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

      // await this.app.init() // Activate will call `init()` if has not been initialized previously
      await this.app.activate()

      // Set a body attribute so the content scrip will know if embedded library is active on a page
      this.doc.body.setAttribute('alpheios-embed-lib-status', 'active')
      this.doc.body.addEventListener('Alpheios_Embedded_Check', event => { this.notifyExtension(event) })

      // and set the state on the components
      this.app.setEmbedLibActive(true)

    } catch (error) {
      console.error(`Unexpected error activating Alpheios: ${error}`)
      return
    }

    let selector = this.enabledSelector

    if (!selector) {
      throw new Error('Configuration must define selector')
    }
    let activateOn = this.doc.querySelectorAll(selector)
    if (activateOn.length === 0) {
      // it could be that we want to activate Alpheios for lookups via the
      // tools even if there isn't any text on the page to activate to on
      // so just print a warning here.
      console.warn(`Alpheios was activated for the page but not any content (no elements matching ${activateOn}).`)
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
    let alignmentTranslation = components.AppController.initAlignedTranslation(this.doc, '.aligned-translation',
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
    this.app.api.ui.openToolbar()
  }

  openActionPanel () {
    if (this._platform.isMobile) {
      this.app.api.ui.closePanel()
    }
    this.app.api.ui.openActionPanel()
  }

  closeActionPanel () {
    this.app.api.ui.closeActionPanel()
  }

  /**
   * Opens the action panel with toolbar buttons hidden and only the lookup visible.
   */
  openActionPanelLookup () {
    if (this._platform.isMobile) {
      this.app.api.ui.closePanel()
    }
    this.app.api.ui.openActionPanel({ showNav: false })
  }

  /**
   * Opens the action panel with only toolbar buttons visible.
   */
  openActionPanelToolbar () {
    if (this._platform.isMobile) {
      this.app.api.ui.closePanel()
    }
    this.app.api.ui.openActionPanel({ showLookup: false })
  }
}
