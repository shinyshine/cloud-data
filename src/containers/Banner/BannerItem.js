import React from "react"

class BannerItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bannerItem: this.props.item
		}
	}

	render() {
		var item = this.props.item;
		return (
			<div className="banner-item">
				<figure>
					<img src={require('../../images/1.jpg')} />
					<div className="banner-caption">
						<h1>{item.title}</h1>
						<p className="date"><span>{item.category}</span> <date>{item.date}</date></p>

						<p className="abstract">
							{item.abstract}
						</p>
					</div>
				</figure>
			</div>
		);
	}
}



export default BannerItem;


