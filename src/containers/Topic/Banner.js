import React from "react"
import { bindActionCreators } from "redux"
import {connect} from "react-redux"

import { fetchTopic } from "../../redux/action/topic"
class BannerItem extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	componentWillMount() {
		// 获取地址栏的搜索信息
		var id = "";
		var url = window.location.search;
		url = url.split('?')[1];
		id = url.split('=')[1];
		// 在此处请求整个页面的数据
		this.props.actions.fetchTopic(id);
	}

	render() {
		return (
			<div id="banner">
				<div className="current-viewport">
					<div className="news-slide-wrapper">
						<div className="banner-item">
							<figure>
								<img src={require('../../images/1.jpg')} />
								<div className="banner-caption">
									<h1>{this.props.banner.title}</h1>
									<p className="abstract">
										{this.props.banner.abstract}
									</p>
									<div className="hot-level">
										<span>热度指数</span>

									</div>
								</div>
								
							</figure>
						</div>
					</div>
				</div>
			</div>
			
		);
	}
}


const mapStateTopProps = (state) => {
	return {
		banner: state.banner
	}
}
const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({ fetchTopic }, dispatch)
})

export default connect(mapStateTopProps, mapDispatchToProps)(BannerItem);


