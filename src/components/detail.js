import React from 'react'

import Header from '../containers/Header/Header'
import BannerItem from '../containers/Banner/BannerItem'
import Footer from '../containers/Footer/Footer'

import Links from '../containers/Detail/Links'
import LineChart from '../containers/Detail/LineChart'
import PieChart from '../containers/Detail/PieChart'
import Cloud from '../containers/Detail/Cloud'

const App = () => {
	return (
		<div>
			<Header/>
			<div id="banner">
				<div className="current-viewport">
					<div className="news-slide-wrapper">
						<BannerItem/>
					</div>
				</div>
			</div>
			<Links/>
			<LineChart/>
			<PieChart/>
			<Cloud/>
			<Footer/>
		</div>
	);
}

export default App;