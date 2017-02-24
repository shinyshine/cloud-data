import React from "react"
import {connect} from 'react-redux'

const NewsList = ({newsList}) => {
	return (
		<div>
			<h1>{newsList.map((news, index) => {
					return <p key={index}>{news}</p>
				})}
			</h1>
		</div>	
	);
}

const mapStateTopProps = (state) => {
	return {
		newsList: state.newsList
	}
}
export default connect(mapStateTopProps, null)(NewsList);

