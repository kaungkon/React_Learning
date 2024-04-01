import { createStore, applyMiddleware } from "redux";
import { Reducer } from "./reducer";
import logger from "redux-logger";
import {thunk} from "redux-thunk"; //thunk help kore kono ekta function er vitor asynchronous code run korte

const myStore = createStore(Reducer, applyMiddleware(logger, thunk));

export default myStore;