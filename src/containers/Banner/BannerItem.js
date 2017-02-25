import React from "react"
import {connect} from "react-redux"

const BannerItem = ({item}) => {
	return (
		<div className="banner-item">
			<figure>
				<img src={require('../../images/1.jpg')} />
				<figuration>
					这里是banner的描述
				</figuration>
			</figure>
		</div>
	);
}

export default BannerItem;

