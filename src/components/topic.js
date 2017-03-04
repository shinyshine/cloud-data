import React from 'react'

import Header from '../containers/Header/Header'
import Footer from '../containers/Footer/Footer'

import Banner from '../containers/Topic/Banner'
import NewsLinks from '../containers/Topic/NewsLinks'
import StandBy from '../containers/Topic/StandBy'
import CommentBar from '../containers/Topic/CommentBar'
import EmotionPie from '../containers/Topic/EmotionPie'
import LineChart from '../containers/Topic/LineChart'


const App = () => {
	return (
		<div>
			<Header/>
			<Banner/>
			<NewsLinks/>
			<LineChart/>
			<StandBy/>
			<CommentBar/>
			<EmotionPie/>
			<Footer/>
		</div>
	);
}

export default App;