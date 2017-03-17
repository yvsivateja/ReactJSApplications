import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from '../reducers/reducersIndex'
import logger from 'redux-logger'

let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore)

export default function configureStore(initialState = {formSchema:[]}){
  return finalCreateStore(rootReducer, initialState)
}
