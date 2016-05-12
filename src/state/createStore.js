import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import empty from './store/empty'

/* Create a new logger middleware */
const logger = createLogger()

/* Add the thunk middleware for async api calls, logger for legging, and
 * enable devtools for browsing the redux store using a browser plugin.
 * Returns a createStore function.
 */
const finalCreateStore = compose(
  applyMiddleware(thunk, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

/* Creates the store by combinding all the subStores into one store, and using initialstate
 * if it was defined.
 */
export default function configureStore(reducers = { empty }, initialstate = undefined) {
  const store = finalCreateStore(combineReducers(reducers), initialstate)
  return store
}
