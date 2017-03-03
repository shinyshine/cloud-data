import React from "react"
import { connect } from "react-redux"
import NewsItem from "./NewsItem"

class NewsLinks extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="news-links">
				<div className="left-white-bg"></div>
				<div className="c-container">
					<h2 className="sub-title">新闻链</h2>
					<div className="news-links-container">
						{
							this.props.newsList.map((item, index) => {
								return <NewsItem key={index} item={item}/>
							})
						}
					</div>
					
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		newsList: state.newsList
	}
}

export default connect(mapStateToProps, null)(NewsLinks);