import React from "react"
import {connect} from "react-redux"
import { bindActionCreators } from "redux"
import { fetchDetail } from "../../redux/action/detail"

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
		this.props.actions.fetchDetail(id);

	}

	render() {
		return (
			<div id="banner">
				<div className="current-viewport">
					<div className="news-slide-wrapper">
						<div className="banner-item">
							<figure>
								<img src={this.props.banner.eventImageUrl} />
								<div className="banner-caption">
									<h1>{this.props.banner.eventName}</h1>
									<p className="date">{this.props.banner.eventDateTime}</p>
									<p className="abstract">
										{this.props.banner.eventSummary}
									</p>
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

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({ fetchDetail }, dispatch)
	}
}

export default connect(mapStateTopProps, mapDispatchToProps)(BannerItem);


