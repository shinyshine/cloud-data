import { applyMiddleware, createStore, compose } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise"

import reducers from "../reducer/index"

const middleware = applyMiddleware(thunk);

const store = compose(applyMiddleware(thunk, promise))(createStore)(reducers);

store.subscribe(() => {
	console.log("store changed");
	console.log(store.getState());
})
export default store;

