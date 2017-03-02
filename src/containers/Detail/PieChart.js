import React from "react"
import PieChartItem from "./PieChartItem"
import { connect } from "react-redux"


class PieChart extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="pie-chart">
				<div className="c-container">
					<PieChartItem pie={this.props.pieData.report} name="网站报道量占比"/>
					<PieChartItem pie={this.props.pieData.emotion} name="情绪量占比"/>
				</div>
				
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	pieData: state.percent
})

export default connect(mapStateToProps, null)(PieChart);