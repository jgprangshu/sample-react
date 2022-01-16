import { createStore, applyMiddleware } from "redux";
// import { interceptor } from "../../globalServices"; //TODO put interceptor

import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../saga";

import rootReducer from "../reducer/index";

const saga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(saga));

// interceptor(store); 
// saga.run(rootSaga); //TODO once async programming jumps in !

export default store;