import { render } from "@testing-library/react";
import App from "./App";
import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";

const middlewares = [createSagaMiddleware()];
const mockStore = configureStore(middlewares);


test("renders learn react link", () => {
  const initialState = { membersList: [] };
  let store = mockStore(initialState);
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
