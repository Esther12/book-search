import React from "react";
import { shallow, render,mount } from "enzyme";
import SearchBox from "./searchBox";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
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

describe("test the search box",()=>{
  const view = render( <Provider store={store}><SearchBox /></Provider>);
  it("the component should render",()=>{
    const component = view["0"].attribs["data-test"]=== "SearchBox";
    expect(component).toBe(true);
  });
  it("error message should not show",()=>{
    const component = view["0"].children.filter(a=>a.name === "p");
    expect(component.length).toBe(0);
  })
})
