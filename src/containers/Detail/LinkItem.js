import React from "react"

const LinkItem = ({item, tiny}) => {
	return (
		<li className={tiny == '0' ? "link-item" : "link-item-tiny"}>
			<div className="topic-title bg-color">
				<p title={item.topicName}><a href={item.topicId}>{item.topicName}</a></p>
			</div>
			<div className="time-axis">
				<p>{item.topicDatetime}</p>
			</div>
		</li>
	);
}

export default LinkItem;