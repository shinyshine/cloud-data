import { combineReducers } from 'redux'
import { banner, standBy, emotionPie, comments } from './topic'

const reducers = combineReducers({
	banner: banner,
	standBy: standBy,
	emotionPie: emotionPie,
	comments: comments
})

export default reducers;