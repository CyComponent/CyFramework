import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './state/store.jsx'
import emptyReducer from './state/reducers/emptyReducer.jsx'

class CytoFramework {

  constructor(modules = [{reducers: {emptyReducer}}], initialState) {
    var reducers = modules.reduce((Rs, M) => ( Object.assign(Rs, M.reducers) ), {})
    this.store = store(reducers, initialState)
  }

  render(module, element) { render(element, module, []) }
  render(module, element, children) {
    ReactDOM.render(
      React.createElement(Provider, {store: this.store},
        React.createElement(module.component, {}, children)
      ),
    element)
  }

}

export function config(reducers, state = undefined) {
  return new CytoFramework(reducers, state)
}
