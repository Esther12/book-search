import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "./bookCard";
import Loading from "../asset/loading.svg"
const BookList = () => {
  const books = useSelector(state => state.searchReducer.books);
  const loading = useSelector(state => state.searchReducer.loading);
  console.log(books.slice(0, 15),"books.slice(0, 15)");
  const display = () => {
    console.log("here")
    return books.slice(0, 15).map(a => {
      console.log(a,"a")
      if(a.publish_date && a.cover_i && a.author_name){
        return <BookCard title={a.title} public={a.publish_date[a.publish_date.length-1]} src={"https://covers.openlibrary.org/b/id/"+a["cover_i"]+"-L.jpg"} author={a.author_name.join(", ")} />;
      }
    });
  };
  return (
    <div>
      {books.length > 1 && !loading ? (
        display()
      ) : loading ? (
        <img className="svg-loading" src={Loading} alt={"loading"}/>
      ) : <p>Start Searching!</p>}
    </div>
  );
};

export default BookList;
