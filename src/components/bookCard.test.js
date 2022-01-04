import React from "react";
import { shallow } from "enzyme";
import BookCard from "./bookCard";
import { findByTestAttr } from "../services/utils";
describe("test the search box",()=>{
  const props = {
    k:1,
    title:"title",
    src:"src",
    publish:1992,
    author:"author"
  }
  const wrapper = shallow( <BookCard {...props}/>);
  it("the component should render",()=>{
    // eslint-disable-next-line testing-library/await-async-query
    const component = findByTestAttr(wrapper,"BookCard");
    expect(component.length).toBe(1);
  });
})
