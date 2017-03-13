import React from 'react'
import {render} from 'react-dom'
import configureStore from '../redux/store'
import {Provider} from 'react-redux'
import App from '../components/App'


let initialState ={
  customers:[]
}

let store = configureStore(initialState)


render(
  <Provider store={store}>
     <App/>
  </Provider>,
  document.getElementById('app')
)
