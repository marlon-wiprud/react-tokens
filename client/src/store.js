import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mainReducer from "./reducers/mainReducer";

const reducer = combineReducers({ mainReducer });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
