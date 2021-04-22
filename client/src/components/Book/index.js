import React from "react";
import "./style.css";

function Book(props) {
  console.log(props);
  return (
    

      <div className="row">
        <div className = "col-3">
          <img alt={props.book.volumeInfo.title} src={props.book.volumeInfo.imageLinks.smallThumbnail}></img>
        </div>
        <div className="col-9">
          <h3>{props.book.volumeInfo.title}</h3>
          <p>{props.book.volumeInfo.authors}</p>
          <p>{props.book.volumeInfo.description}</p>
        </div>
      </div>


  );
}

export default Book;
