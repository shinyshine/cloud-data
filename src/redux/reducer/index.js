import {combineReducers} from 'redux'
import {newsList} from './newsList'

const reducers = combineReducers({
	newsList: newsList
})

export default reducers;