import React from "react"

import ReactHighCharts from "react-highcharts"

class PieChart extends React.Component {
	constructor(props) {

		super(props);
		var len = this.props.pie.length;
		var colorArr =  (len == "5" ? [
										"#8B0505",
										"#B80002",
										"#C43131",
										"#E84B4B",
										"#EA8989"
									  ] : 
									  [
										"#0D365F",
										"#0F487F",
										"#346DA4",
										"#5891C8",

										"#7CB5EC",
										"#A4DAFF",
										"#AACEF2",
										"#BFDBF7"
									   ]);

		console.log(this.props);
		this.chartConfig = {
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie',
				backgroundColor: "transparent"
			},

			colors: colorArr,
			title: {
				text: ''
			},
			legend: {
				align: 'left',
				verticalAlign: 'middle',
				layout: "vertical"
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					size: 260,
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: false
					},
					showInLegend: true
				}
			},
			credits: {
				enabled: false
			},
			series: [{
						name: 'Brands',
						colorByPoint: true,
						data: this.props.pie
					}]
		}
	}

	render() {
		return (
			<div className="pie-item">
				<h2 className="sub-title">{this.props.name}</h2>
				<div className="pie-item-wrap">
					<ReactHighCharts config={this.chartConfig} />
				</div>
			</div>
		);
	}
}

export default PieChart;