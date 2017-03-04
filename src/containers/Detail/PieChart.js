import React from "react"
import PieChartItem from "./PieChartItem"
import { connect } from "react-redux"


class PieChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			emotion: this.props.emotion,
			report: this.props.report
		}
	}

	render() {
		return (
			<div className="pie-chart">
				<div className="c-container">
					<PieChartItem pie={this.state.report} len="5" name="网站报道量占比"/>
					<PieChartItem pie={this.state.emotion} len="8" name="情绪量占比"/>
				</div>
				
			</div>
		);
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.emotion.length != 0) {
			this.state.emotion = nextProps.emotion;
			this.state.report = nextProps.report;
		}
	}
}
const mapStateToProps = (state) => {
	return state.percent
}

export default connect(mapStateToProps, null)(PieChart);