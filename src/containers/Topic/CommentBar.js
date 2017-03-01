import React from "react"
import { connect } from "react-redux"

import ReactHighCharts from "react-highcharts"

class CommentBar extends React.Component {
	constructor(props) {
		super(props);
		this.chartConfig = {
			chart: {
	            type: 'column',
	            backgroundColor: "transparent"
	        },
	        title: {
	            text: ''
	        },
	        credits: {
	        	enabled: false
	        },
	        colors: ['#C10909'],
	        legend: {
	        	enabled: false
				// align: 'right',
				// verticalAlign: 'middle',
				// layout: "vertical"
			},

	        xAxis: {
	        	lineColor: "#333333",
	        	lineWidth: 2,
	        	title: {
	        		text: "时间",
	        		align: 'high',
	        		style: {
	        			"color": '#000000',
	        			"fontSize": '15px'
	        		}
	        	},
	            categories: [
	                '2017/03/01',
	                '2017/03/01',
	                '2017/03/01',
	                '2017/03/01',
	                '2017/03/01',
	                '2017/03/01',
	                '2017/03/01',
	                '2017/03/01',
	                '2017/03/01',
	                '2017/03/01'
	            ],
	            crosshair: true
	        },
	        yAxis: {
	        	gridLineColor: "#aaaaaa",

	            min: 0,
	            title: {
	                text: ''
	            }
	        },
	        tooltip: {
	            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
	            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
	            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
	            footerFormat: '</table>',
	            shared: true,
	            useHTML: true
	        },
	        plotOptions: {
	            column: {
	                pointPadding: 0.2,
	                borderWidth: 0
	            }
	        },
	        series: [{
	            name: 'Tokyo',
	            data: [71.5, 106.4, 129.2, 144.0,135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
	        }]
		}

	}

	render() {
		return (
			<div className="comment-bar">
				<div className="c-container">
					<h2 className="sub-title">评论数量</h2>
					<div className="bar-container">
						<span className="y-axis">数量</span>
						<ReactHighCharts config={this.chartConfig}/>
					</div>
				</div>
			</div>
		);
	}

}

export default CommentBar;