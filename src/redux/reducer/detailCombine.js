import { combineReducers } from 'redux'
import { banner, topics, report, keywords, percent } from './detail'

const reducers = combineReducers({
	banner: banner,
	topics: topics,
	report: report,
	keywords: keywords,
	percent: percent

})

export default reducers;