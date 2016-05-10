import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './state/createStore'
import empty from './state/store/empty'

if (typeof Object.assign != 'function') {
  (function () {
    Object.assign = function (target) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
        for (var nextKey in source) {
          if (Object.prototype.hasOwnProperty.call(source, nextKey)) {
            output[nextKey] = source[nextKey];
          }
       }
    }
  }
  return output;
  };
  })();
}

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
