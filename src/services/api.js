import { searchContent, searchResult, searchResultByDate, setPageTotal, turnPage } from "../actions/searchAction";
import axios from "./axios";
import { useSelector } from "react-redux";

export const searchBook = (data) => async dispatch => {
  try {
    console.log(process.env);
    dispatch(searchContent(data));
    const query = data.split(" ").join("+");
    const result = await axios.get(`search.json?title=${query}&limit=1&jscmd=data&fields=title,publish_date,cover_i,cover,author_name`);
    const res = await axios.get(`search.json?title=${query}&limit=${result.data.num_found}&jscmd=data&fields=title,publish_date,cover_i,first_publish_year,author_name`);
    const arr = res.filter(a=>{if(a.publish_date && a.cover_i && a.author_name){return a}});
    dispatch(setPageTotal(arr.length));
    dispatch(searchResult(arr));
  } catch (error) {
    console.log(error, "searchBook")
  }
}
//const url=`https://openlibrary.org/search.json?title=harry&limit=10000&jscmd=data&fields=title,publish_date,edition_key,cover,author_name`

export const sortByDate = (page) => async dispatch => {
  try {
    dispatch(searchResultByDate(page));
    dispatch(turnPage(0))
  } catch (error) {
    console.log(error, "sortByDate")
  }
}

export const sortByName = (page) => async dispatch => {
  try {
    let books = useSelector(state => state.searchReducer.books);
    books.sort((a, b)=> {
      return a.first_publish_year - b.first_publish_year;
    })
    dispatch(searchResultByDate(books));
  } catch (error) {
    console.log(error, "sortByName")
  }
}

export const getPage = (page) => async dispatch => {
  try {
    const books = useSelector(state => state.searchReducer.books);
    const limit = page*15;
    dispatch(turnPage(page))
    return books.slice(limit,limit+15);
  } catch (error) {
    console.log(error, "searchBook")
  }
}