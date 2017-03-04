import $ from "jquery"
import {config, splitUrlSearch} from "../../config/config"

export const fetchTopic = (id) => {
	return dispatch => {
		$.ajax({
			url: config.server + "newsNews.action",
			type: "GET",
			data: {
				tid: id
			},
			dataType: 'jsonp',
			success: function(result) {
				console.log(result);
				dispatch({
					type: "SAVE_BANNER",
					banner: result.basic
				});
				dispatch({
					type: "SAVE_NWES_LIST",
					newsList: result.news_links
				});
				dispatch({
					type: "SAVE_REPORT_NUM",
					reportNum: result.emocomm_num
				});
				dispatch({
					type: "SAVE_STAND_DATA",
					standby: result.standby
				});
				dispatch({
					type: "SAVE_COMMENT_NUM",
					commentNum: result.comment_num
				});
				dispatch({
					type: "SAVE_PIE_DATA",
					emotion: result.emotion_percent
				})
			}
		})
		
	}
}  				



export const fetchComments = (item) => {
	return dispatch => {
		$.ajax({
			url: config.server + "newsNewsEmoDetail.action",
			type: "GET",
			dataType: "jsonp",
			data: {
				emoid: item.id,
				tid: splitUrlSearch()['tid']
			},
			success: function(result) {
				console.log(result);
				dispatch({
					type: "FETCH_COMMENTS",
					comments: result
				});
				dispatch({
					type: "CHANGE_COM_TARGET",
					item: item
				});
			},
			error: function(e) {
				console.log(e);
			}
		})

		
	}
}
