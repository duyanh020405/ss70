import { combineReducers, createStore } from "redux";
import handleChange from "../reducer/Show";
handleChange
const rootReduce = combineReducers({handleChange})
const store = createStore(rootReduce)
export default store