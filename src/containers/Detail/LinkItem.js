import React from "react"

const LinkItem = ({item, tiny}) => {
	return (
		<li className={tiny == '0' ? "link-item" : "link-item-tiny"}>
			<div className="topic-title bg-color">
				<p title={item.title}>{item.title}</p>
			</div>
			<div className="time-axis">
				<p>{item.date}</p>
			</div>
		</li>
	);
}

export default LinkItem;