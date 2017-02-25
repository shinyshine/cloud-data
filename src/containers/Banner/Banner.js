import React from "react"
import { connect } from "react-redux"

import { bindActionCreators } from "redux"

import { switchBanner } from '../../redux/action/index'

import BannerItem from './BannerItem'
class Banner extends React.Component {
	constructor(props) {
		super(props);
		 this.state = {
		 	bannerNews: "banner banner here hhhhhh",

		 	interval: null
		 }
	}

	componentDidMount() {
		var _this = this;
		this.interval = setInterval(function() {
			_this.props.actions.switchBanner();

		}, 2000);
		console.log('componentDidMount');
    }

    componentWillUnMount() {
    	console.log('componentWillUnMount');
    	// clearInterval(this.interval);
    }

	render() {
		return (
			<div id="banner">
				<div className="current-viewport">
					<div className="news-slide-wrapper">
						<BannerItem item="data"/>
						<BannerItem item="data"/>
						<BannerItem item="data"/>
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
