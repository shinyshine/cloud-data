import React from "react"
import { connect } from "react-redux"

import { bindActionCreators } from "redux"
import { slideToNext } from "../../redux/action/detail"
import { slideToPre } from "../../redux/action/detail"
import LinkItem from "./LinkItem"

class Links extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="links-container">
				
				<div className="c-container">
					<div className="btn pre-btn" onClick={() => this.props.actions.slideToPre(this.props.topics.current, this.props.topics.total)}></div>
					<h2 className="sub-title">话题链</h2>
					<div className="links-viewport">
						<ul className="link-items" style={{transform: 'translate(-' + this.props.topics.current*960 + 'px,0)'}}>
							<LinkItem item="itemdata" tiny="0"/>
							<LinkItem item="itemdata" tiny="1"/>
							<LinkItem item="itemdata" tiny="0"/>
							<LinkItem item="itemdata" tiny="1"/>
							<LinkItem item="itemdata" tiny="0"/>
							<LinkItem item="itemdata" tiny="1"/>
							<LinkItem item="itemdata" tiny="1"/>
							<LinkItem item="itemdata" tiny="1"/>
							
						</ul>
					</div>
					
					<div className="btn next-btn" onClick={() => this.props.actions.slideToNext(this.props.topics.current, this.props.topics.total)}></div>
				</div>
				
			</div>
		);
	}
}

const mapStateTopProps = (state) => {
	return {
		topics: state.topics
	}
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({slideToNext, slideToPre}, dispatch)
})

export default connect(mapStateTopProps, mapDispatchToProps)(Links);