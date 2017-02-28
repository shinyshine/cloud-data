export const banner = (state = [], action) => {
	switch(action.type) {
		default: 
			return state;
	}
}

export const showAll = (state = -1, action) => {
	switch(action.type) {
		case "SHOW_ALL_TEXT": 
			return action.index;
		case "HIDE_ALL_TEXT": 
			return -1;

		default: 
			return state;
	}
}