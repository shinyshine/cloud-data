export const banner = (state = [], action) => {
	switch(action.type) {
		case "SAVE_BANNER":
			return action.banner;
		default: 
			return state;
	}
}
export const newsList = (state = [], action) => {
	switch (action.type) {
		case "SAVE_NWES_LIST":
			return action.newsList;

		default:
			return state;
	}
}

export const standBy = (state = [], action) => {
	switch(action.type) {
		case "SAVE_STAND_DATA":
			return action.standby;

		default: 
			return state;
	}
}
export const commentNum = (state = {}, action) => {
	switch(action.type) {
		case "SAVE_COMMENT_NUM":
			return action.commentNum;

		default:
			return state;
	}
}

var commentsInitial = {
	item: {
		id: -1,
		text: ""
	},
	
}
export const comments = (state = commentsInitial, action) => {
	console.log(action);
	switch (action.type) {
		case "FETCH_COMMENTS": 
			return Object.assign({}, state, action);
		case "CHANGE_COM_TARGET": 
			return Object.assign({}, state, action);
		default: 
			return state;
	}
}


export const emotionPie = (state = [], action) => {
	switch(action.type) {
		case "SAVE_PIE_DATA":
			return action.emotion;

		default:
			return state;
	}
}