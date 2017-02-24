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