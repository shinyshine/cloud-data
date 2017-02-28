import React from "react"
import {connect} from "react-redux"

class BannerItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bannerItem: this.props.item
		}
	}

	render() {
		return (
			<div className="banner-item">
				<figure>
					<img src={require('../../images/1.jpg')} />
					<div className="banner-caption">
						<h1>林丹出轨</h1>
						<p className="date"><span>时政类</span> <date>2017/11/11</date></p>

						<p className="abstract">
							React Native 是由Facebook发布的开源框架，它的宣传语是“Learn once，write anywhere”，似乎是在标榜着React Native在手，在编程的世界里走遍天下都不怕，这消息一发出，就在开发人员内部掀起了一阵小高潮，一些人员感激涕零的表示：跨平台呀跨平台，这简直就是开发者的福音啊，另一些人员则表示：任何宣传一技在手，走遍天下的技术都是纸老虎，没有办法走到最后。那么，为什么在开发人员中会出现这两种截然不同的反应呢?
						</p>
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


