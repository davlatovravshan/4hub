import './index.css'

import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './App'
import reducer from './store/reducer'
import {BrowserRouter} from 'react-router-dom'

const store = createStore(reducer)

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'))