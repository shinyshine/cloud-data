import React from "react"
import { connect } from "react-redux"

import { bindActionCreators } from "redux"

import { fetchNews } from '../../redux/action/index'
import { splitUrlSearch } from "../../config/config"
import BannerItem from './BannerItem'
import { isIE, getIEVer } from '../../config/config'
class Banner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			len: this.props.banner.length,
			current: 0,
		}

		this.switchBanner = (index) => {
			clearInterval(this.timer);

			this.setState(Object.assign({}, this.state, { current: index} ));
			this.tick();
	    	console.log(this.state);
	    }
	}
	componentWillMount() {
		// 获取地址栏的搜索信息
		var arr = splitUrlSearch(),
			text = decodeURI(arr['s'] ? arr['s'] : "");

		// 请求首页的10条数据
		console.log(text);
		this.props.actions.fetchNews(text);


	}
	componentWillReceiveProps(nextProps) {
		var len = nextProps.banner.length;
		if(len != 0) {
			this.state.len = len;
		}
	}
	tick() {
		this.timer = setInterval(() => {
			var current = this.state.current,
				len = this.state.len;

			this.setState((preS) => {
				return Object.assign({}, this.state, {
					current: current+1 < len ? current+1 : 0,
				})
			})
		}, 5000)
	}

	componentDidMount() {
		var ver = getIEVer();

		if(!!ver && ver <= 9) {
			return false;
		}

		this.tick();

    }

    componentWillUnMount() {
    	clearInterval(this.timer);
    }


	render() {
		return (
			<div className="banner">
				<div className="current-viewport">
					<div style={{left: -this.state.current * 100 + '%'}} className="news-slide-wrapper">
						{this.props.banner.map((item, index) => {
							return <BannerItem key={index} item={item}/>
						})}

					</div>

					<div className="dot-tabs">
						<span style={{transform: 'translate(' + (this.state.current*50 + 3*(2*this.state.current + 1)) + 'px,0)'}} className="active-tab"></span>
						<ul>
							{this.props.banner.map((item, index) => {
								if(index <= 2) {
									return <li key={index} onClick={()=>this.switchBanner(index)}><i></i></li>
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
	actions: bindActionCreators({fetchNews}, dispatch)
})

const mapStateToProps = (state) => {
	return {
		current: state.currentIndex,
		banner: state.banner
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
