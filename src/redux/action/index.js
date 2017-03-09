import axios from "axios";
import $ from "jquery"
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

		// var responce = news;
		
		// dispatch({
		// 	type: "GET_NEWS_SUCCESS",
		// 	newsList: responce.slice(3)
		// });
		// dispatch({
		// 	type: "GET_BANNER_SUCCESS",
		// 	banner: responce.slice(0,3)
		// })
		$.ajax({
			type: "GET",
			url: "http://192.168.235.21:8080/WeiboNewsProject/news/newsIndex.action",
			dataType: "jsonp",
			data: {
				text: text
			},
			success: function(result) {
				console.log(result);
				dispatch({
					type: "GET_NEWS_SUCCESS",
					newsList: result.slice(3)
				});
				dispatch({
					type: "GET_BANNER_SUCCESS",
					banner: result.slice(0,3)
				})
			},
			error: function(e) {
				console.log(e);
			}

		})
		// 发起请求
		// axios.get('http://192.168.235.21:8080/WeiboNewsProject/news/newsIndex.action', {
		// 	params: {
		// 		text: "搜索内容"
		// 	},
		// 	responseType: "jsonp"
		// })
		// .then((responce) => {
		// 	console.log(responce);
		// 	// dispatch({
		// 	// 	type: "GET_NEWS_SUCCESS",
		// 	// 	newsList: responce.slice(3)
		// 	// });
		// 	// dispatch({
		// 	// 	type: "GET_BANNER_SUCCESS",
		// 	// 	banner: responce.slice(0,3)
		// 	// })

		// })
	}
}




export const search = (text) => ({
	type: "SEARCH_NEWS",
	text: text
})


