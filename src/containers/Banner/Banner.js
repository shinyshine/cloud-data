import React from "react"
import { connect } from "react-redux"

import { bindActionCreators } from "redux"

import { switchBanner } from '../../redux/action/index'

import BannerItem from './BannerItem'
class Banner extends React.Component {
	constructor(props) {
		super(props);
		 this.state = {
		 	interval: null
		 }
	}

	componentDidMount() {
		var _this = this;
		this.interval = setInterval(function() {
			_this.props.actions.switchBanner();

		}, 5000);
		console.log('componentDidMount');
    }

    componentWillUnMount() {
    	console.log('componentWillUnMount');
    	clearInterval(this.interval);
    }

	render() {
		return (
			<div id="banner">
				<div className="current-viewport">
					<div style={{left: -this.props.current * 100 + '%'}} className="news-slide-wrapper">
						<BannerItem item="lun bo tu here~！！！~~"/>
						<BannerItem item="lun bo tu here~！！！~~"/>
						<BannerItem item="lun bo tu here~！！！~~"/>
					</div>

					<div className="dot-tabs">
						<span style={{transform: 'translate(' + (this.props.current*50 + 3*(2*this.props.current + 1)) + 'px,0)'}} className="active-tab"></span>
						<ul>
							<li className="active"><i></i></li>
							<li><i></i></li>
							<li><i></i></li>
						</ul>
					</div>
				</div>
				
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({switchBanner}, dispatch)
})

const mapStateTopProps = (state) => {
	return {
		current: state.currentIndex
	}
}

export default connect(mapStateTopProps, mapDispatchToProps)(Banner);
