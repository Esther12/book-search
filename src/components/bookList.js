import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "./bookCard";
import Loading from "../asset/loading.svg";
import { turnPage } from "../actions/searchAction";
import { getPage, sortResult } from "../services/api";
const BookList = () => {
  const dispatch = useDispatch();
  const searchInfo = useSelector(state => state.searchReducer);
  const display = () => {
    if (searchInfo.current_books.length > 1) {
      return searchInfo.current_books.map((a, key) => {
        return <BookCard k={key} title={a.title} publish={a.first_publish_year} src={"https://covers.openlibrary.org/b/id/" + a.cover_i + "-L.jpg"} author={a.author_name[0]} />;
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
    dispatch(sortResult(searchInfo.current_page, "date"));
  };
  const sortName = event => {
    event.preventDefault();
    dispatch(sortResult(searchInfo.current_page, "name"));
  };
  return (
    <div className="box-container">
      <div className="box-btn-group">
        <button className={`box-btn ${searchInfo.sort === 1 ? "selected" : ""}`} onClick={sortName}>
          Sort by name
        </button>
        <button className={`box-btn ${searchInfo.sort === 2 ? "selected" : ""}`} onClick={sortDate}>
          Sort by date
        </button>
      </div>
      <div className="box-card-list">
        { display() }
      </div>
      <div className="box-footer">
        <button className={`box-btn ${searchInfo.current_page == 0 ? "inactive" : ""}`} onClick={prePage}>
          Previous
        </button>
        <span>
          {searchInfo.current_page}/{searchInfo.pages}
        </span>
        <button className={`box-btn ${searchInfo.current_page == searchInfo.page ? "inactive" : ""}`} onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default BookList;
