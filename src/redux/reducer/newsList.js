export const newsList = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_NEWS_START':
			return state;
		case 'FETCH_NEWS_SUCCESS':
			
			return [
				...state,
				action.newsList
			];

		default:
			return state;
	}
}


export const currentIndex = (state = 0, action) => {
	switch (action.type) {
		case 'SWITCH_BANNER': 
			return (state >= 2 ? 0 : state + 1);

		default: 
			return state;
	}
}