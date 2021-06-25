import React from 'react'
import ReactDOM from 'react-dom'

import './assets/scss/style.css'
import App from './App'

import { Provider } from 'react-redux'
import store from './redux/store'

//const hist = createBrowserHistory();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
