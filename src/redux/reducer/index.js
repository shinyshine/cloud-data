import {combineReducers} from 'redux'
import {newsList, currentIndex} from './newsList'

const reducers = combineReducers({
	newsList: newsList,
	currentIndex: currentIndex,
})

export default reducers;