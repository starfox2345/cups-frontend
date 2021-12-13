import {applyMiddleware, createStore}  from "redux";
import thunk from "redux-thunk";
import cupsReducer from "./reducers/cupsReducer";

export default createStore(cupsReducer, applyMiddleware(thunk))