import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducer";
import rootSaga from "../saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware];

const Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);
sagaMiddleware.run(rootSaga);

export default Store;
