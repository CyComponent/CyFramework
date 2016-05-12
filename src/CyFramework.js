import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import createStore from './state/createStore'

class CyFramework {

  /* Construct the CyFramework by combining stores into one object, and then creating a store using the initial state and store object. */
  constructor(modules, initialState) {
    console.log(modules)
    var stores = modules.reduce(function(subStores, module) {
      subStores[module.storeName] = combineReducers(module.store)
      return subStores
    }, {})
    this.store = createStore(stores, initialState)
  }


  /* Render a component into the DOM at element. Can additionally accept properties to be passed to the component, and also
   * children to be passed for the component to render.
   */
  render(module, element, properties = {}, children = []) {
    ReactDOM.render(
      React.createElement(Provider, {store: this.store},
        React.createElement(module.component, properties, children)
      ),
    element)
    return undefined
  }

  /* Get store state or get substore state by name of substore */
  getStore(storeName = null) {
    if (!storeName) {
      return this.store.getState()
    } else {
      return this.store.getState()[storeName]
    }
  }

  /* Dispatch an action or actionCreator thunk to the store to change store state */
  dispatch(action) {
    return this.store.dispatch(action)
  }

}

/* Create a new CyFramework instance, passing in modules that need state initialization and
 * a configured default state. Can also accept small arity with default parameters.
 */
export function config(modules = [], defaultState = undefined) {
  return new CyFramework(modules, defaultState)
}
