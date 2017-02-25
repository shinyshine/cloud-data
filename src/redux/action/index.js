import axios from "axios"


const getDataSuccess = (text) => {
	return {
		type: 'FETCH_NEWS_SUCCESS',
		newsList: "you are searching the news with de keyword" + text
	}
}

const fetchData = (postData) => {
	return dispatch => {
		dispatch(getDataSuccess(postData.text))
	}
}

export const search = (text) => {
	return dispatch => {
		dispatch(fetchData({text:text}));
	}
}

export const switchBanner = (index) => {
	return dispatch => {
		dispatch({type: 'SWITCH_BANNER', index: index})
	}
}	
