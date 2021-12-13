import {createStore} from "redux";
import {applyMiddleware, createStore}  from "redux";

export default createStore(reducer, applyMiddleware(thunk))