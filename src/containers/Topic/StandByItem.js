import React from "react"

const StandByItem = ({data}) => {
	return (
		<div className="stand-item">
			<span style={{width: data.pasitiveNum*860+"px"}} className="stand-bar po-bar"></span>
			<span className="target">{data.evaluationObjectName}</span>
			<span style={{width: data.negativeNum*860+"px"}} className="stand-bar ne-bar"></span>
		</div>
	);
}

export default StandByItem;