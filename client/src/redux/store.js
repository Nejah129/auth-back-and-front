import { reducer } from "./reducer";
import thunk from "redux-thunk";
import {createStore,applyMiddleware,compose} from "redux"

let devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store=createStore(reducer,compose(applyMiddleware(thunk),devtools))