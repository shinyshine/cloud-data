import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

class LineChart extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="lineChart">
				<div className="c-container">
					<h2 className="sub-title">报道量</h2>

				</div>
			</div>
		);
	}
}

export default LineChart;