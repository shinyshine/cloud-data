import $ from "jquery"

export const fetchDetail = (id) => {
	return dispatch => {
		// 发起请求
		$.ajax({
			type: "GET",
			url: "http://192.168.235.21:8080/WeiboNewsProject/news/newsTopic.action",
			data: {
				eid: id
			},
			dataType: "jsonp",
			success: function(result) {
				console.log(result);
				dispatch({
					type: "SAVE_BANNER",
					banner: result.basic
				});
				dispatch({
					type: "SAVE_TOPICS",
					topics: result.topics,
				});
				dispatch({
					type: "SAVE_PERCENT",
					percent: {
						emotion: result.emotion_percent,
						report: result.report_percent
					}
				});

				dispatch({
					type: "SAVE_KEYWORDS",
					keywords: result.keywords
				})

			},
			error: function(e){
				console.log(e);
			}
		})
		
	}
}