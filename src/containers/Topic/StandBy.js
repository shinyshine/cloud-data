import React from "react"
import { connect } from "react-redux"
import StandByItem from "./StandByItem"

class StandBy extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="stand-by">
				<div className="c-container">
					<h2 className="sub-title">立场检测</h2>
					<div className="stand-items">
						{this.props.standBy.map((item, index) => {
							return <StandByItem data={item} key={index}/>
						})}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		standBy: state.standBy
	}
}

export default connect(mapStateToProps, null)(StandBy);