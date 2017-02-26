import React from 'react'

import Header from '../containers/Header/Header'
import Banner from '../containers/Banner/Banner'
import NewsList from '../containers/Index/NewsList'
import NewsItem from '../containers/Index/NewsItem'

const App = () => {
	return (
		<div>
			<Header/>
			<Banner/>
			<NewsList/>
			<NewsItem/>
		</div>
	);
}

export default App;