import React from "react"
import {connect} from "react-redux"

const BannerItem = ({item}) => {
	return (
		<div className="banner-item">
			<figure>
				<img src={require('../../images/1.jpg')} />
				<div className="banner-caption">
					这里是banner的描述
				</div>
			</figure>
		</div>
	);
}

export default BannerItem;

