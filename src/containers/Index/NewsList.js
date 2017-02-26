import React from "react"
import {connect} from 'react-redux'
import NewsItem from './NewsItem'

const NewsList = ({newsList}) => {
	return (
		<div id="main">
			<div className="c-container">
				{newsList.map((news, index) => 
					<NewsItem key={index} />
				)}
			</div>
			
		</div>	
	);
}

const mapStateTopProps = (state) => {
	return {
		newsList: state.newsList
	}
}
export default connect(mapStateTopProps, null)(NewsList);

