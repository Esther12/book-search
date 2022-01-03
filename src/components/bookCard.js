import React from "react";

const BookCard = (props) => {
  console.log(props.k)
  return (
    <div  key={props.k} className="card">
      <div className="card-img">
        <img alt={props.title} src={props.src}/>
      </div>
      <div className="card-info">
        <div title={props.title} className="card-title">{props.title}</div>
        
        <p className="card-auth">By {props.author}</p>
        <p className="card-date">First published at {props.publish}</p>
      </div>
      
    </div>
  );
};

export default BookCard;
