import React from "react"

class BannerItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bannerItem: this.props.item,
			host: window.location.host
		}

	}

	render() {
		var item = this.props.item;
		return (
			<div className="banner-item">
				<a href={this.state.host + '/detail/?id=' + item.eventId}>
					<figure>
						<img src={item.eventImageUrl} />
						<div className="banner-caption">
							<h1>{item.eventName}</h1>
							<p className="date"><span>{item.generalName}</span> <date>{item.eventDatetime}</date></p>

							<p className="abstract">
								{item.eventSummary}
							</p>
						</div>
					</figure>
				</a>
			</div>
		);
	}
}



export default BannerItem;


