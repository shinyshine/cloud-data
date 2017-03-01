export const banner = (state = [], action) => {
	switch(action.type) {
		default: 
			return state;
	}
}


var standInitial = [{
	target: "林丹",
	po: 0.63,
	ne: 0.37
},{
	target: "谢杏芳",
	po: 0.8,
	ne: 0.2
},{
	target: "赵雅琪",
	po: 0.93,
	ne: 0.07
},{
	target: "傻逼",
	po: 0.99,
	ne: 0.01
}]
export const standBy = (state = standInitial, action) => {
	switch(action.type) {
		case "SAVE_STAND_DATA":
			return state;

		default: 
			return state;
	}
}

var commentsInitial = {
	item: {
		id: -1,
		text: ""
	},
	comments: [ {
					id: 1,
					text: "第一条评论第一条评论第一条评论第一条评论第一条评论第一条评论第一条评论"
				},{
					id: 2,
					text: "第二条评论"
				},{
					id: 3,
					text: "第三条评论"
				},{
					id: 4,
					text: "第一条评论"
				},{
					id: 5,
					text: "第二条评论"
				},{
					id: 6,
					text: "第三条评论"
				},{
					id: 7,
					text: "第一条评论"
				},{
					id: 8,
					text: "第二条评论"
				},{
					id: 9,
					text: "第三条评论"
				},{
					id: 10,
					text: "第一条评论第一条评论第一条评论第一条评论第一条评论第一条评论第一条评论"
				},{
					id: 11,
					text: "第二条评论"
				},{
					id: 12,
					text: "第一条评论第一条评论第一条评论第一条评论第一条评论第一条评论第一条评论"
				},{
					id: 13,
					text: "第二条评论"
				},{
					id: 14,
					text: "第一条评论第一条评论第一条评论第一条评论第一条评论第一条评论第一条评论"
				},{
					id: 15,
					text: "第二条评论"
				}]
}
export const comments = (state = commentsInitial, action) => {
	switch (action.type) {
		case "FETCH_COMMENTS": 
			return state;
		case "CHANGE_COM_TARGET": 
			return Object.assign({}, state, action)
		default: 
			return state;
	}
}

var emotionInitial = [  {
    						id: 0,
    						name: "悲伤",
    						y : 12.5
    					},{
    						id: 1,
    						name: "悲伤",
    						y : 12.5
    					},{
    						id: 2,
    						name: "悲伤",
    						y : 12.5
    					},{
    						id: 3,
    						name: "悲伤",
    						y : 12.5
    					},{
    						id: 4,
    						name: "悲伤",
    						y : 12.5
    					},{
    						id: 5,
    						name: "悲伤",
    						y : 12.5
    					},{
    						id: 6,
    						name: "悲伤",
    						y : 12.5
    					},{
    						id: 7,
    						name: "悲伤",
    						y : 12.5
    					}]
export const emotionPie = (state = emotionInitial, action) => {
	switch(action.type) {
		case "GET_PIE_DATA":
			return state;

		default:
			return state;
	}
}