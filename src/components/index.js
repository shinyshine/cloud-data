import React from 'react'

import Header from '../containers/Header/Header'
import Banner from '../containers/Banner/Banner'
import NewsList from '../containers/Index/NewsList'

const App = () => {
	return (
		<div>
			<Header/>
			<Banner/>
			<NewsList/>
		</div>
	);
}

export default App;