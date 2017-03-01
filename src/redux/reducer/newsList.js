export const newsList = (state = [], action) => {
	switch (action.type) {
		case 'GET_NEWS_SUCCESS':
			return action.newsList;
		default:
			return state;
	}
}
export const banner = (state = [], action) => {
	switch(action.type) {
		case "GET_BANNER_SUCCESS":
			return action.banner;
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