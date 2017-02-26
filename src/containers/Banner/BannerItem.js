import React from "react"
import {connect} from "react-redux"

class BannerItem extends React.Component {
	constructor(props) {
		super(props);
		if(!this.props.item) {
			// 不是轮播图
			this.state = {
				bannerItem: this.props.bannerItem
			}
		} else {
			this.state = {
				bannerItem: this.props.item
			}
		}
	}

	render() {
		return (
			<div className="banner-item">
				<figure>
					<img src={require('../../images/1.jpg')} />
					<div className="banner-caption">
						{this.state.bannerItem}
					</div>
				</figure>
			</div>
		);
	}
}


const mapStateTopProps = (state) => {
	return {
		bannerItem: '这里不是轮播图哦~~~'
	}
}

export default connect(mapStateTopProps, null)(BannerItem);


