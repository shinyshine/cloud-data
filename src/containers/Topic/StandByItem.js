import React from "react"

const StandByItem = ({data}) => {
	return (
		<div className="stand-item">
			<span style={{width: data.po*860+"px"}} className="stand-bar po-bar"></span>
			<span className="target">{data.target}</span>
			<span style={{width: data.ne*860+"px"}} className="stand-bar ne-bar"></span>
		</div>
	);
}

export default StandByItem;