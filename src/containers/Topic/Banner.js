import React from "react"
import { bindActionCreators } from "redux"
import {connect} from "react-redux"

import { fetchTopic } from "../../redux/action/topic"
class BannerItem extends React.Component {
	constructor(props) {
		super(props);
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
	getHotHtml(num) {
		var arr = [];
		for(var i = 0; i < num; i ++) {
			arr.push(<i className="fire" key={i}></i>);
		}
		return arr;
	}

	render() {
		return (
			<div className="banner">
				<div className="current-viewport">
					<div className="news-slide-wrapper">
						<div className="banner-item">
							<figure>
								<img src={this.props.banner.topicImgUrl} />
								<div className="banner-caption">
									<h1>{this.props.banner.topicName}</h1>
									<p className="date">{this.props.banner.topicDatetime}</p>
									<p className="abstract">
										{this.props.banner.topicSummary}
									</p>
									<div className="hot-level">
										<span>热度指数</span>
										{this.getHotHtml(this.props.banner.topicHotWeight)}
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


const mapStateTopProps = (state) => ({
	banner: state.banner
})
const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({ fetchTopic }, dispatch)
})

export default connect(mapStateTopProps, mapDispatchToProps)(BannerItem);


