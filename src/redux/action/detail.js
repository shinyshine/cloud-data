import axios from "axios"

export const slideToNext = (current, total) => ({
	type: 'SLIDE_TO_NEXT',
	current: current + 1

});


export const slideToPre = (current, total) => ({
	type: 'SLIDE_TO_PRE',
	current: current - 1
});


var bannerInitial = {
	title: "林丹出轨",
	date: "2017/11/11",
	abstract: "React Native 是由Facebook发布的开源框架，它的宣传语是“Learn once，write anywhere”",
	image: "../../images/1.jpg",
}

var topicsInitial = [{  //话题链
						id: 1,
						title: "这是某个话题的名称",
						date: "2017/2/23"
					 },{
						id: 2,
						title: "这是某个话题的名称",
						date: "2017/2/24"
					 },{
						id: 3,
						title: "这是某个话题的名称",
						date: "2017/2/25"
					 },{  //话题链
						id: 4,
						title: "这是某个话题的名称",
						date: "2017/2/26"
					 },{
						id: 5,
						title: "这是某个话题的名称",
						date: "2017/2/27"
					 },{
						id: 6,
						title: "这是某个话题的名称",
						date: "2017/2/28"
					 },{  //话题链
						id: 7,
						title: "这是某个话题的名称",
						date: "2017/3/1"
					 }];


var percentInitial = {
	        report: [   // 要求字段名为name和y， 不可更改
    					// y的值可为0-1和0-100，即表示百分比的方式这两种都可以，不用百分号，
    					// y 的值要求为int或float，不可以为字符串
    					{
    						name: "网易新闻",
    						y : 20,
    					},{
    						name: "新浪新闻",
    						y : 20,
    					},{
    						name: "搜狐新闻",
    						y : 20,
    					},{
    						name: "腾讯新闻",
    						y : 20,
    					},{
    						name: "凤凰新闻",
    						y : 20,
    					}
    				],
    		emotion:[   // 8种情感 及其占比
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
}

var keyInitial = { // weight 一一对应words数组的里面的词语，取值为0~1，全部加起来可以不为1
	words: [ "谢杏芳","林丹","中国体育","比赛","出轨","最大危机","赵雅琪","模范夫妻", "泥潭中求生"],
	weight: [0.25, 0.8, 0.1, 0.12, 0.75, 0.4, 0.45, 0.35, 0.23]		      
}

export const fetchDetail = (id) => {
	return dispatch => {
		// dispatch({
		// 	type: "SAVE_BANNER",
		// 	banner: bannerInitial
		// });
		// dispatch({
		// 	type: "SAVE_TOPICS",
		// 	topics: topicsInitial,
		// 	total: topicsInitial.length
		// });

		

		// dispatch({
		// 	type: "SAVE_PERCENT",
		// 	percent: percentInitial
		// });

		// dispatch({
		// 	type: "SAVE_KEYWORDS",
		// 	keywords: keyInitial
		// })
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
					total: result.topics.length
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
		// axios.get('url', {
		// 	id: "新闻id"
		// })
		// .then((responce) => {
		// 	console.log(responce);
		
		// 	dispatch({
		// 		type: "SAVE_TOPICS",
		// 		topics: responce.topics,
		// 		total: responce.topics.length
		// 	});

		// 	dispatch({
		// 		type: "SAVE_REPORT_NUM",
		// 		reportNum: responce.report_num
		// 	});

		// 	dispatch({
		// 		type: "SAVE_PERCENT",
		// 		percent: {
		// 			report: responce.report_percent,
		// 			emotion: responce.emotion_percent
		// 		}
		// 	});

		// 	dispatch({
		// 		type: "SAVE_KEYWORDS",
		// 		keywords: responce.keywords
		// 	})

		// })
	}
}