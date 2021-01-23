import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { data } from "./books";
import Book from "./book";

const BookList = () => {
  return (
    <section className="bookList">
      {data.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
