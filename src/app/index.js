import React from 'react'
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import App from './components/app'

hydrate(
        <Provider store={store}>
            <App />
        </Provider>,
        document.querySelector('#root')
)