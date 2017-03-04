import React from "react"
import { connect } from "react-redux"
import PieChart from "../Topic/PieChart"

class EmotionPie extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			// showComments: this.props.comments.item.id,
			// comments: this.props.comments,
			colorsArr: ["#0D365F",
						"#0F487F",
						"#346DA4",
						"#5891C8",

						"#7CB5EC",
						"#A4DAFF",
						"#AACEF2",
						"#BFDBF7"],
		}
		console.log(this.props);
	}

	render() {
		return (
			<div className="emotion-pie">
				<div className="c-container">
					<h2 className="sub-title">情绪倾向</h2>
					<div className="pie-item"><PieChart color={this.state.colorsArr}/></div>
					{   this.props.comments.item.id!= -1 ?
						<div className="pie-item comments">
							<h3 className="target"><i style={{backgroundColor: this.state.colorsArr[this.props.comments.item.id]}}></i>{this.props.comments.item.text}</h3>
							<ul>
								{ this.props.comments.comments.map((item, index) => {
									return <li key={index}>{item.commentContent}</li>
								})}
							</ul> 
						</div>:null
					}
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		emotionPie: state.emotionPie,
		comments: state.comments,

	}
}
export default connect(mapStateToProps, null)(EmotionPie);

