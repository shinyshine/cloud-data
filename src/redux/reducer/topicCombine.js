import { combineReducers } from 'redux'
import { banner, showAll } from './topic'

const reducers = combineReducers({
	banner: banner,
	showAll: showAll
})

export default reducers;