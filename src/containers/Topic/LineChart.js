import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import ReactHighCharts from "react-highcharts";

class LineChart extends React.Component {
	constructor(props) {
		super(props);
		this.chartConfig = {
			title: {
				text: '报道量',
				x: -20, //center
				style: {
					fontSize: '0'
				}
			},
			xAxis: {
				categories: this.props.lineData.date,
				lineColor: '#C20706',
				lineWidth: 4,
				tickWidth: 0,

			},
			yAxis: {
				title: {
					text: ''
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}],
				gridLineColor: '#FAC1C1'
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: false
			},
			tooltip: {
				valueSuffix: '°C'
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: this.props.lineData.report
		}
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.lineData.date.length != 0) {
			this.chartConfig.xAxis.categories = nextProps.lineData.date;
			this.chartConfig.series = nextProps.lineData.report;
		}
	}

	render() {
		return (
			<div className="line-chart">
				<div className="c-container">
					<h2 className="sub-title">报道量</h2>
					<div className="line-chart-container">
						<span className="y-axis">数量</span>
						<ReactHighCharts config={this.chartConfig} />
					</div>
					
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	lineData: state.reportLine
})

export default connect(mapStateToProps, null)(LineChart);