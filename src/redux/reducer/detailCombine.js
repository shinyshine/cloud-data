import { combineReducers } from 'redux'
import { topics } from './detail'

const reducers = combineReducers({
	topics: topics
})

export default reducers;