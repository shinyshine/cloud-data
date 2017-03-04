import React from "react"
import { connect } from "react-redux"

import { bindActionCreators } from "redux"

import { switchBanner, fetchNews } from '../../redux/action/index'

import BannerItem from './BannerItem'
class Banner extends React.Component {
	constructor(props) {
		super(props);
		 this.state = {
		 	interval: null,
		 }
	}
	componentWillMount() {
		// 获取地址栏的搜索信息
		var text = "";
		var url = window.location.search;
		
		if(url != "") {
			url = url.split('?')[1];
			text = url.split('=')[1];
		}
		// 请求首页的10条数据
		this.props.actions.fetchNews(text);

	}

	componentDidMount() {
		var _this = this;
		this.interval = setInterval(function() {
			_this.props.actions.switchBanner();

		}, 5000);
    }

    componentWillUnMount() {
    	clearInterval(this.interval);
    }

	render() {
		return (
			<div id="banner">
				<div className="current-viewport">
					<div style={{left: -this.props.current * 100 + '%'}} className="news-slide-wrapper">
						{this.props.banner.map((item, index) => {
							return <BannerItem key={index} item={item}/>
						})}

					</div>

					<div className="dot-tabs">
						<span style={{transform: 'translate(' + (this.props.current*50 + 3*(2*this.props.current + 1)) + 'px,0)'}} className="active-tab"></span>
						<ul>
							{this.props.banner.map((item, index) => {
								if(index <= 2) {
									return <li key={index}><i></i></li>
								}
								
							})}
						</ul>
					</div>
				</div>
				
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({switchBanner, fetchNews}, dispatch)
})

const mapStateToProps = (state) => {
	return {
		current: state.currentIndex,
		banner: state.banner
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
