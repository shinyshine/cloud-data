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
						<NewsItem index="0"/>
						<NewsItem index="1"/>
						<NewsItem index="2"/>
						<NewsItem index="3"/>
					</div>
					
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		newsLinks: state.newsLinks
	}
}

export default connect(mapStateToProps, null)(NewsLinks);