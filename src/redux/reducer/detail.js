// topics 的初始化
const initial = {
	current: 0,
	total: 0,
	topics: []
}

export const topics = (state = initial, action) => {
	switch (action.type) {
		case 'SLIDE_TO_NEXT': 
			return getSlideState(state, action);

		case 'SLIDE_TO_PRE':
			return getSlideState(state, action);
		case 'SAVE_TOPICS':
			return Object.assign({}, state, action);
		default: 
			return state;
	}
}

export const report = (state = {}, action) => {
	switch (action.type) {
		case 'SAVE_REPORT_NUM':
			return action.reportNum;

		default: 
			return state;
	}
}
var keyIn = {
	weightList: [],
	wordsList: []
}
export const keywords = (state = keyIn, action) => {
	switch (action.type) {
		case 'SAVE_KEYWORDS':
			return action.keywords;

		default: 
			return state;
	}
}
var reportIn = {
	emotion: [],
	report: []
}
export const percent = (state = reportIn, action) => {
	switch (action.type) {
		case "SAVE_PERCENT": 
			return action.percent;

		default: 
			return state;
	}
}



export const banner = (state = {}, action) => {
	switch (action.type) {
		case "SAVE_BANNER": 
			return action.banner;
		default: 
			return state;
	}
}

const getSlideState = (state, action) => {
	if(action.current <= (state.total-1) && action.current >= 0){
		return Object.assign({}, state, action);
	} else {
		return state;
	}
}