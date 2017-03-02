import { combineReducers } from 'redux'
import { banner, standBy, emotionPie, comments, newsList } from './topic'

const reducers = combineReducers({
	banner: banner,
	standBy: standBy,
	emotionPie: emotionPie,
	comments: comments,
	newsList: newList
})

export default reducers;