import searchReducer from "./searchReducer";
const initialState = {
  books: [],
  search: "",
  loading: false,
  pages: 0,
  current_page: 0,
  current_books: [],
  sort: 0, // 0 no, 1 name, 2 date
};
const resultTotal = 1;
const result = [{
  a:"a",
  b:"b",
  c:"c"
}]
describe("search reducer", () => {
  it("should return detault state", () => {
    const empty = searchReducer(undefined, {});
    expect(empty).toEqual(initialState);
  });
  it("should set the pages", () => {
    const empty = searchReducer(undefined, {type:"SET_PAGE", payload:resultTotal});
    expect(empty.pages).toEqual(0);
  });
  it("should set the result", () => {
    const empty = searchReducer(undefined, {type:"SET_RESULT", payload:result});
    expect(empty.pages).toEqual(0);
    expect(empty.current_books.length).toEqual(1);
    expect(empty.sort).toEqual(0);
  });
  it("should set the sort to 1", () => {
    const empty = searchReducer(undefined, {type:"RESULT_FILTER_NAME", payload:null});
    expect(empty.sort).toEqual(1);
  });
  it("should set the sort to 2", () => {
    const empty = searchReducer(undefined, {type:"RESULT_FILTER_DATE", payload:null});
    expect(empty.sort).toEqual(2);
  });
  it("should set loading to true, and add the search content", () => {
    const empty = searchReducer(undefined, {type:"SEARCH_CONTENT", payload:"Gone with wind"});
    expect(empty.search).toEqual("Gone with wind");
    expect(empty.loading).toEqual(true);
  });
});
