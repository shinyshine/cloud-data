import React from 'react'

import Header from '../containers/Header/Header'
import BannerDetail from '../containers/Banner/BannerDetail'
import Footer from '../containers/Footer/Footer'

import Links from '../containers/Detail/Links'
import LineChart from '../containers/Detail/LineChart'
import PieChart from '../containers/Detail/PieChart'
import Cloud from '../containers/Detail/Cloud'

const App = () => {
	return (
		<div>
			<Header/>
			<BannerDetail/>
			<Links/>
			<LineChart/>
			<PieChart/>
			<Cloud/>
			<Footer/>
		</div>
	);
}

export default App;