import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Book(props) {
  console.log(props);
  const id = props.book.id;
  return (


      <div className="row">
        <div className = "col-3">
          <div className="img-container align-middle">
            <a href={props.book.volumeInfo.infoLink}><img alt={props.book.volumeInfo.title} src={props.book.volumeInfo.imageLinks.smallThumbnail} /></a>
          </div>

        </div>
        <div className="col-9">
          <h3>{props.book.volumeInfo.title}</h3><button id={props.book.volumeInfo.id} onClick={() => props.save(id)}>Save</button>
          <p>{props.book.volumeInfo.authors}</p>
          <p>{props.book.volumeInfo.description}</p>
        </div>
      </div>


  );
}

export default Book;
