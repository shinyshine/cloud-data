import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import store from '../redux/store/topic'

import Layout from '../components/topic'

import '../style/Common.less'
import '../style/topic.less'

const app = document.getElementById('app');

ReactDom.render(
	<Provider store={store}>
		<Layout/>
	</Provider>,
	app
)