import axios from "axios";
import $ from "jquery"

export const fetchNews = (text) => {
	return dispatch => {
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
		
	}
}

export const search = (text) => ({
	type: "SEARCH_NEWS",
	text: text
})


