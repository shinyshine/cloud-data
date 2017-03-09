import React from "react"
// import { connect } from "react-redux"
// import {bindActionCreators} from 'redux'

class NewsItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			btnText: "详细内容",
			showAll: false,
		}

		this.toggleText = () => {
			if(!this.state.showAll) {
				this.setState({
					btnText: "收起全文",
					showAll: !this.state.showAll,
				})
			} else {
				this.setState({
					btnText: "详细内容",
					showAll: !this.state.showAll
				})
			}

		}
	}

	render() {

		return (
			<div className="news-item">
				
				<div className="news-detail">
					<div className="img-container">
						<p className="date">{this.props.item.newsDatetime.split(" ")[0]}</p>
				
						<img src={this.props.item.newsImageUrl} />
					</div>
					<article>
						<h1 title={this.props.item.newsTitle}>{this.props.item.newsTitle}</h1>
						<div className="content">
							<p className={"content-wrap" + (!this.state.showAll ?'':" content-wrap-auto")}>{this.props.item.newsContent}</p>
							<p className="detail-btn">
								<span><a href={this.props.item.newsUrl} target="_blank">前往原文</a></span>
								<span onClick = {() => this.toggleText()}>{this.state.btnText}</span>
							</p>
							
						</div>
					</article>
				</div>
			</div>
		);
	}
}

export default NewsItem;

