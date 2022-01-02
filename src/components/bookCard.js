import React from "react";

const BookCard = (props) => {
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
