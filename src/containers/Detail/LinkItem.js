import React from "react"

const LinkItem = ({item, tiny}) => {
	return (
		<li className={tiny == '0' ? "link-item" : "link-item-tiny"}>
			<div className="topic-title bg-color">
				<p title="这里是话题的名称哦~~~~~！！！@">这里是话题的名称哦~~~~~！！！@</p>
			</div>
			<div className="time-axis">
				<p>2017/2/27</p>
			</div>
		</li>
	);
}

export default LinkItem;