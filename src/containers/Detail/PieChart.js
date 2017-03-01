import React from "react"
import PieChartItem from "./PieChartItem"
import { connect } from "react-redux"
const PieChart = ({pies}) => {
	return (
		<div className="pie-chart">
			<div className="c-container">
				<PieChartItem name="网站报道量占比" num="5"/>
				<PieChartItem name="情绪量占比" num="8" />
			</div>
			
		</div>
	);
}

export default PieChart;