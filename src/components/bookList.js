import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "./bookCard";
import Loading from "../asset/loading.svg";
import { turnPage } from "../actions/searchAction";
import { getPage ,sortResult} from "../services/api";
const BookList = () => {
  const dispatch = useDispatch();
  const searchInfo = useSelector(state => state.searchReducer);
  const display = () => {
    if (searchInfo.current_books.length > 1) {
      return searchInfo.current_books.map(a => {
        return <BookCard title={a.title} public={a.first_publish_year} src={"https://covers.openlibrary.org/b/id/" + a.cover_i + "-L.jpg"} author={a.author_name[0]} />;
      });
    }
  };
  useEffect(() => {
    const getBooks = async () => {
      await dispatch(getPage(searchInfo.current_page));
    };
    getBooks();
  }, []);
  const nextPage = event => {
    event.preventDefault();
    dispatch(turnPage(searchInfo.current_page + 1));
  };
  const prePage = event => {
    event.preventDefault();
    dispatch(turnPage(searchInfo.current_page - 1));
  };
  const sortDate = event => {
    event.preventDefault();
    dispatch(sortResult(searchInfo.current_page,"date"));
  };
  const sortName = event => {
    event.preventDefault();
    dispatch(sortResult(searchInfo.current_page,"name"));
  };
  return (
    <div>
      <div>
        <button onClick={sortName}>Sort By Name</button>
        <button onClick={sortDate}>Sort By Date</button>
      </div>
      {}
      {searchInfo.current_books.length > 1 && !searchInfo.loading ? display() : searchInfo.loading ? <img className="svg-loading" src={Loading} alt={"loading"} /> : <p>Start Searching!</p>}
      <div>
        <button onClick={prePage}>Previous</button>
        <span>
          {searchInfo.current_page}/{searchInfo.pages}
        </span>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default BookList;
