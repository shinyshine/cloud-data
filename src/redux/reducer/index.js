import {combineReducers} from 'redux'
import {newsList, currentIndex, banner} from './newsList'

const reducers = combineReducers({
	newsList: newsList,
	banner: banner,
	currentIndex: currentIndex,
})

export default reducers;