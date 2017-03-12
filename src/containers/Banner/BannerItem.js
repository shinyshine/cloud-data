import React from "react"

class BannerItem extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			bannerItem: this.props.item,
			url: "http://" + window.location.host + "/detail?eid=" + this.props.item.eventId
		}


	}

	render() {
		var item = this.props.item;
		return (
			<div className="banner-item">
				<a target="_blank" href={this.state.url}>
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


