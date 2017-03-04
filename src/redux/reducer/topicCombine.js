import { combineReducers } from 'redux'
import { banner, standBy, emotionPie, comments, newsList, commentNum, reportLine } from './topic'

const reducers = combineReducers({
	banner: banner,
	reportLine: reportLine,
	standBy: standBy,
	emotionPie: emotionPie,
	comments: comments,
	newsList: newsList,
	commentNum: commentNum
})

export default reducers;