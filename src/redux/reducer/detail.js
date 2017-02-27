// topics 的初始化
const initial = {
	current: 0,
	total: 2
}

export const topics = (state = initial, action) => {
	switch (action.type) {
		case 'SLIDE_TO_NEXT': 
			return getSlideState(state, action);

		case 'SLIDE_TO_PRE':
			return getSlideState(state, action);
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