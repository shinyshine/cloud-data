import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import store from '../redux/store/index'

import Layout from '../components/index'

import '../style/Common.less'
import '../style/NewsList.less'

const app = document.getElementById('app');

ReactDom.render(
	<Provider store={store}>
		<Layout/>
	</Provider>,
	app
)