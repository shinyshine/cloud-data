import axios from "axios"
var bannerInitial = {
		title: "川普就职演讲",
		abstract: "摘要",
		hot_level: 3, //取值为1~5，表示热度指数
	},
var newsListInitial = [   // 新闻链
					{
						id: 1,
						title: "新闻标题1",
						date: "2017/3/1",
						image: "http://image.jpg",
						content: "新闻的主要内容"
					},{
						id: 2,
						title: "新闻标题2",
						date: "2017/2/29",
						image: "http://image.jpg",
						content: "新闻的主要内容"
					},{
						id: 3,
						title: "新闻标题3",
						date: "2017/2/27",
						image: "http://image.jpg",
						content: "新闻的主要内容"
					},
				]
var standInitial = [{
	target: "林丹",
	po: 0.63,
	ne: 0.37
},{
	target: "谢杏芳",
	po: 0.8,
	ne: 0.2
},{
	target: "赵雅琪",
	po: 0.93,
	ne: 0.07
},{
	target: "傻逼",
	po: 0.99,
	ne: 0.01
}]
var commentsInitial = {
	item: {
		id: -1,
		text: ""
	},
	comments: [ {
					id: 1,
					text: "第一条评论第一条评论第一条评论第一条评论第一条评论第一条评论第一条评论"
				},{
					id: 2,
					text: "第二条评论"
				},{
					id: 3,
					text: "第三条评论"
				},{
					id: 4,
					text: "第一条评论"
				},{
					id: 5,
					text: "第二条评论"
				},{
					id: 6,
					text: "第三条评论"
				},{
					id: 7,
					text: "第一条评论"
				},{
					id: 8,
					text: "第二条评论"
				},{
					id: 9,
					text: "第三条评论"
				},{
					id: 10,
					text: "第一条评论第一条评论第一条评论第一条评论第一条评论第一条评论第一条评论"
				},{
					id: 11,
					text: "第二条评论"
				},{
					id: 12,
					text: "第一条评论第一条评论第一条评论第一条评论第一条评论第一条评论第一条评论"
				},{
					id: 13,
					text: "第二条评论"
				},{
					id: 14,
					text: "第一条评论第一条评论第一条评论第一条评论第一条评论第一条评论第一条评论"
				},{
					id: 15,
					text: "第二条评论"
				}]
}

var emotionInitial = [  
						{
    						id: 0,
    						name: "悲伤",
    						y : 12.5
    					},{
    						id: 1,
    						name: "悲伤",
    						y : 12.5
    					},{
    						id: 2,
    						name: "悲伤",
    						y : 12.5
    					},{
    						id: 3,
    						name: "悲伤",
    						y : 12.5
    					},{
    						id: 4,
    						name: "悲伤",
    						y : 12.5
    					},{
    						id: 5,
    						name: "悲伤",
    						y : 12.5
    					},{
    						id: 6,
    						name: "悲伤",
    						y : 12.5
    					},{
    						id: 7,
    						name: "悲伤",
    						y : 12.5
    					}
    				]
var commentNumInitial = { //随着时间变化的评论数量
				   //date和number一一对应
			date: [
	                '2017/03/01',
	                '2017/03/01',
	                '2017/03/01',
	                '2017/03/01',
	                '2017/03/01',
	                '2017/03/01',
	                '2017/03/01',
	                '2017/03/01',
	                '2017/03/01',
	                '2017/03/01'
	            ],
	    	number: [715, 1064, 1292, 1440,1356, 1485, 2164, 1941, 956, 544]
	}
export const fetchTopic = (id) => {
	return dispatch => {
		dispatch({
			type: "SAVE_BANNER",
			banner: bannerInitial
		});
		dispatch({
			type: "SAVE_NWES_LIST",
			newsList: newsListInitial
		});
		dispatch({
			type: "SAVE_STAND_DATA",
			standby: standInitial
		});
		dispatch({
			type: "SAVE_COMMENT_NUM",
			commentNum: commentNumInitial
		})

		dispatch({
			type: "SAVE_PIE_DATA",
			emotion: emotionInitial
		})
	}
}  				



export const fetchComments = (item) => {
	return dispatch => {
		dispatch({
			type: "CHANGE_COM_TARGET",
			item: item
		});

		dispatch({
			type: "FETCH_COMMENTS",
			comments: "comments"
		})
	}
}
