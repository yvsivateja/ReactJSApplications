import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from '../reducers/reducersIndex'
import logger from 'redux-logger'

let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore)

export default function configureStore(initialState = {customers:[]}){
  return finalCreateStore(rootReducer, initialState)
}
