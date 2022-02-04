import { currentBooks, searchContent, searchResult, searchResultByDate, searchResultByName, setPageTotal, turnPage } from "../actions/searchAction";
import axios from "./axios";

export const searchBook = data => async dispatch => {
  try {
    dispatch(searchContent(data));
    const query = data.split(" ").join("+");
    const result = await axios.get(`search.json?title=${query}&limit=1&jscmd=data&fields=title,publish_date,cover_i,cover,author_name`);
    const res = await axios.get(`search.json?title=${query}&limit=${result.data.num_found}&jscmd=data&fields=title,publish_date,cover_i,first_publish_year,author_name,cover_edition_key`);
    const arr = res.data.docs.filter(a => {
      if (a.publish_date && a.cover_i && a.author_name) {
        return a;
      }
    });
    dispatch(setPageTotal(arr.length));
    dispatch(searchResult(arr));
  } catch (error) {
    console.log(error, "searchBook");
  }
};
export const sortResult = (page, type) => async dispatch => {
  try {
    if (type == "date") {
      dispatch(searchResultByDate(page == undefined ? 0: page));
    } else {
      dispatch(searchResultByName(page == undefined ? 0: page));
    }

    dispatch(turnPage(0));
  } catch (error) {
    console.log(error, "sortResult");
  }
};

export const getPage = page => async dispatch => {
  try {
    dispatch(currentBooks(page == undefined ? 0: page));
  } catch (error) {
    console.log(error, "getPage");
  }
};
