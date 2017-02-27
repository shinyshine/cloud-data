import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import store from '../redux/store/detail'

import Layout from '../components/detail'

import '../style/Common.less'
import '../style/Detail.less'

const app = document.getElementById('app');

ReactDom.render(
	<Provider store={store}>
		<Layout/>
	</Provider>,
	app
)