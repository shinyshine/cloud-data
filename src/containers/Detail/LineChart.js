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
				categories: ['2017/02/28', '2017/02/28', '2017/02/28', '2017/02/28', '2017/02/28', '2017/02/28',
					'2017/02/28', '2017/02/28'
				],
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
			series: [{
				name: 'Tokyo',
				data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2]
			}, {
				name: 'New York',
				data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8]
			}, {
				name: 'Berlin',
				data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6]
			}, {
				name: 'London',
				data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0]
			}]
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

export default LineChart;