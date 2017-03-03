import React from "react"
import { connect } from "react-redux"
import {bindActionCreators} from 'redux'
import ReactHighCharts from "react-highcharts"
import { fetchComments } from "../../redux/action/topic"

class PieChart extends React.Component {
	constructor(props) {

		super(props);
		var _this = this;
		this.chartConfig = {
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie',
				backgroundColor: "transparent",
				
			},

			colors: this.props.color,
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
					events: {
						click: function(e) {
							var item = {
								id: e.point.id,
								text: e.point.name,
							}
							_this.props.actions.fetchComments(item);
						}
					},
					showInLegend: true
				}
			},
			credits: {
				enabled: false
			},
			series: [{
						name: '占比',
						colorByPoint: true,
						data: _this.props.pieData
					}]
		}
	}

	render() {
		return (
			<div className="pie-item-wrap">
				<ReactHighCharts config={this.chartConfig} />
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		pieData: state.emotionPie,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({fetchComments}, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(PieChart);