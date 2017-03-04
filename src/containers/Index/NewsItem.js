import React from 'react'

class NewsItem extends React.Component {
	constructor (props) {
		super(props);
		console.log(this.props);
		this.host = window.location.host;
	}

	render() {
		return (
			<article className="news-item">
				<h2>{this.props.item.eventName}</h2>
				<div className="news-detail">
					<div className="img-container">
						<a href={this.host + "/detail/?id=" + this.props.item.eventId}><img src={this.props.item.eventImageUrl} /></a>
					</div>
					<div className="news-caption">
						<p className="news-classify"><span>{this.props.item.generalName}</span></p>
						<p className="news-date"><span>{this.props.item.eventDatetime}</span></p>
						<p className="news-abstract">{this.props.item.eventSummary}</p>
					</div>
				</div>
			</article>
		);
	}

}


export default NewsItem;

