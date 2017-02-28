import React from "react"
import PieChartItem from "./PieChartItem"
import { connect } from "react-redux"
const PieChart = ({pies}) => {
	return (
		<div className="pie-chart">
			<div className="c-container">
				<PieChartItem num="5"/>
				<PieChartItem num="8" />
			</div>
			
		</div>
	);
}

export default PieChart;