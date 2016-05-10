import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './state/createStore'
import empty from './state/store/empty'

class CyFramework {

  constructor(modules = [{stores: {empty}}], initialState) {
    var reducers = modules.reduce((Rs, M) => ( Object.assign(Rs, M.stores) ), {})
    this.store = store(reducers, initialState)
  }

  render(module, element) { render(element, module, {}, []) }
  render(module, element, properties) { render(element, module, properties, []) }
  render(module, element, properties, children) {
    ReactDOM.render(
      React.createElement(Provider, {store: this.store},
        React.createElement(module.component, properties, children)
      ),
    element)
    return undefined
  }

  getStore() {
    return this.store.getState()
  }

  dispatch(action) {
    return this.store.dispatch(action)
  }

}

export function config() { config([]) }
export function config(cyStores, defaultState = undefined) {
  return new CyFramework(cyStores, defaultState)
}
