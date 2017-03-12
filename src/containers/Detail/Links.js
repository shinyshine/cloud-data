import React from "react"
import { connect } from "react-redux"

import { bindActionCreators } from "redux"
import { slideToNext } from "../../redux/action/detail"
import { slideToPre } from "../../redux/action/detail"
import LinkItem from "./LinkItem"

class Links extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 0,
			total: this.props.topics.length
		}

	}
	slideTopics(cur, total, type) {
		console.log(total);
		if(type == "PRE") {
			// previous page

			cur = cur > 0 ? cur - 1 : cur;
		} else {

			cur = (cur + 1)*6 < total ? cur + 1 : cur;

		}

		this.setState({
			current: cur
		})
	}

	render() {
		return (
			
				<div className="links-container">
					<div className="c-container">
						<div className="btn pre-btn" onClick={() => this.slideTopics(this.state.current, this.state.total, 'PRE')}></div>
						<h2 className="sub-title">话题链</h2>
						<div className="links-viewport">
							<ul className="link-items" style={{transform: 'translate(-' + this.state.current*960 + 'px,0)'}}>
								{
									this.props.topics.map((item, index) => {
										return <LinkItem key={index} item={item} tiny={index%2}/>
									})
								}
								
								
							</ul>
						</div>
						<div className="btn next-btn" onClick={() => this.slideTopics(this.state.current, this.state.total, 'NEXT')}></div>
					</div>
			 	</div>
			
		);
	}

	componentWillReceiveProps(nextProps) {

		this.setState({
			current: 0,
			total: nextProps.topics.length
		})
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