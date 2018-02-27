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

  static get propTypes () {
    return {
      NUMERIC: Symbol('Numeric'),
      STRING: Symbol('String'),
      SYMBOL: Symbol('Symbol')
    }
  }

  static get props () {
    return {
      panelStatus: {
        name: 'panelStatus',
        valueType: State.propTypes.SYMBOL,
        values: {
          OPEN: Symbol.for('Alpheios_Status_PanelOpen'), // Panel is open
          CLOSED: Symbol.for('Alpheios_Status_PanelClosed') // Panel is closed
        },
        defaultValueIndex: 1
      },
      tab: {
        name: 'tab',
        valueType: State.propTypes.STRING,
        values: {
          INFO: 'info'
        },
        defaultValueIndex: 0
      }
    }
  }

  static get symbolProps () {
    return [State.props.panelStatus.name]
  }

  static get stringProps () {
    return [State.props.tab.name]
  }

  /**
   * Only certain features will be stored within a serialized version of State object.  This is done
   * to prevent context-specific features (such as local event handlers) to be passed over the network
   * to a different context where they would make no sense. This getter returns a list of such fields.
   * @return {String[]}
   */
  static get dataProps () {
    return State.symbolProps.concat(State.stringProps)
  }

  /**
   * A copy constructor.
   * @param {State} source - An instance of State object we need to copy.
   * @return {State} A copy of a source object.
   */
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
      script: {
         ACTIVE: Symbol.for('Alpheios_Script_Active')
      },
      panel: {
        OPEN: Symbol.for('Alpheios_Status_PanelOpen'), // Panel is open
        CLOSED: Symbol.for('Alpheios_Status_PanelClosed') // Panel is closed
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

  setPanelOpen () {
    this.setItem('panelStatus', State.statuses.panel.OPEN)
    return this
  }

  setPanelClosed () {
    this.setItem('panelStatus', State.statuses.panel.CLOSED)
    return this
  }

  changeTab (tabName) {
    this.setItem(State.props.tab.name, tabName)
    return this
  }

  update (source) {
    for (let key of Object.keys(source)) {
      this[key] = source[key]
    }
    return this
  }

  diff (state) {
    let diff = {
      _changedKeys: [],
      _changedEntries: []
    }

    for (let key of Object.keys(state)) {
      // Build diffs only for data properties
      if (State.dataProps.includes(key)) {
        if (this.hasOwnProperty(key)) {
          if (this[key] !== state[key]) {
            diff[key] = state[key]
            diff['_changedKeys'].push(key)
            diff['_changedEntries'].push([key, state[key]])
          }
        } else {
          console.warn(`State has no property named "${key}"`)
        }
      }
    }

    diff.keys = function () {
      return diff['_changedKeys']
    }

    diff.entries = function () {
      return diff['_changedEntries']
    }

    diff.has = function (prop) {
      return diff._changedKeys.includes(prop)
    }

    diff.isEmpty = function () {
      return !diff._changedKeys.length
    }
    return diff
  }

  /**
   * Creates a serializable copy of a source object. Firefox uses the structured clone algorithm
   * (https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) to serialize objects.
   * Requirements of this algorithm are that a serializable object to have no Function or Error properties,
   * neither any DOM Nodes. That's why an empty serializable object is created and only
   * selected properties are copied into it.
   * @param {State} source - An object to be serialized.
   * @return {Object} A serializable copy of a source.
   */
  static serializable (source) {
    let serializable = {}
    for (let key of Object.keys(source)) {
      if (State.dataProps.includes(key)) {
        /*
        Only certain features will be stored within a serialized version of a State. This is done
        to prevent context-specific features (such as local event handlers) to be passed over the network
        to a different context where they would make no sense.
         */
        let value = source[key]
        serializable[key] = (typeof value === 'symbol') ? Symbol.keyFor(value) : value
      }
    }
    return serializable
  }

  static readObject (jsonObject) {
    let state = new State()

    for (let prop of State.symbolProps) {
      if (jsonObject.hasOwnProperty(prop)) { tabScript[prop] = Symbol.for(jsonObject[prop]) }
    }

    for (let prop of State.stringProps) {
      if (jsonObject.hasOwnProperty(prop)) { tabScript[prop] = jsonObject[prop] }
    }

    return state
  }
}
