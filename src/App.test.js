import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("With React Testing Library", () => {
  const initialState = {
    searchReducer:{
      books: [],
      search: "",
      loading: false,
      pages: 0,
      current_page: 0,
      current_books: [],
      sort: 0, // 0 no, 1 name, 2 date
    }};
  const mockStore = configureStore();
  let store;

  it('Shows "Hello world!"', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
