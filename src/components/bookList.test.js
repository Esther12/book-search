import React from "react";
import { render } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import BookList from "./bookList";
const initialState = {
  searchReducer: {
    books: [],
    search: "",
    loading: false,
    pages: 0,
    current_page: 0,
    current_books: [],
    sort: 0, // 0 no, 1 name, 2 date
  },
};

const mockStore = configureStore();
let store = mockStore(initialState);

describe("test the book list",()=>{
  const view = render( <Provider store={store}><BookList/></Provider>);
  it("the component should render",()=>{
    const component = view["0"].attribs["data-test"]=== "BookList";
    expect(component).toBe(true);
  });
})
