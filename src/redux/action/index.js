import axios from "axios"
var news = [{
	id: 1,
	title: "林丹出轨",
	category: "时政类",
	date: "2017/11/11",
	abstract: "摘要"
},{
	id: 1,
	title: "林丹出轨",
	category: "时政类",
	date: "2017/11/11",
	abstract: "摘要"
},{
	id: 1,
	title: "林丹出轨",
	category: "时政类",
	date: "2017/11/11",
	abstract: "摘要"
},{
	id: 1,
	title: "林丹出轨",
	category: "时政类",
	date: "2017/11/11",
	abstract: "摘要"
},{
	id: 1,
	title: "林丹出轨",
	category: "时政类",
	date: "2017/11/11",
	abstract: "摘要"
}]

export const fetchNews = (text) => {
	return dispatch => {

		var responce = news;
		
		dispatch({
			type: "GET_NEWS_SUCCESS",
			newsList: responce.slice(3)
		});
		dispatch({
			type: "GET_BANNER_SUCCESS",
			banner: responce.slice(0,3)
		})
		// 发起请求
		// axios.get('url', {
		// 	text: "搜索内容，可为空"
		// })
		// .then((responce) => {
		// 	console.log(responce);
		// 	dispatch({
		// 		type: "GET_NEWS_SUCCESS",
		// 		newsList: responce.slice(3)
		// 	});
		// 	dispatch({
		// 		type: "GET_BANNER_SUCCESS",
		// 		banner: responce.slice(0,3)
		// 	})

		// })
	}
}




export const search = (text) => ({
	type: "SEARCH_NEWS",
	text: text
})

export const switchBanner = (index) => {
	return dispatch => {
		dispatch({type: 'SWITCH_BANNER', index: index})
	}
}	
