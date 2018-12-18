/**
 * Contains Alpheios state
 * @property {panelStatus} panelStatus
 */
export default class State {
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
