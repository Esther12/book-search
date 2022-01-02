import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const BookCard = (props) => {
  console.log(props)
  return (
    <div>
      <div>
        <img alt={props.title} src={props.src}/>
      </div>
      <div>
        <p>{props.title}</p>
        <p>{props.author}</p>
        <p>{props.publish}</p>
      </div>
    </div>
  );
};

export default BookCard;
