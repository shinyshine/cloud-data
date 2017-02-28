import React from 'react'

import Header from '../containers/Header/Header'
import Footer from '../containers/Footer/Footer'

import Banner from '../containers/Topic/Banner'
import NewsLinks from '../containers/Topic/NewsLinks'


const App = () => {
	return (
		<div>
			<Header/>
			<Banner/>
			<NewsLinks/>
			<Footer/>
		</div>
	);
}

export default App;