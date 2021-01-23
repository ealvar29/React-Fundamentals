import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    title: "I love you to the moon and Back",
    author: "Amelia Hepworth",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61O3XxoArTL._AC_SY400_.jpg",
  },
  {
    id: 2,
    title: "I love you to the moon and Back",
    author: "Amelia Hepworth",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61O3XxoArTL._AC_SY400_.jpg",
  },
  {
    id: 3,
    title: "Ender's Game",
    author: "Orson Scott Card",
    img: "https://m.media-amazon.com/images/I/81+IUsYtGTL._AC_UY218_.jpg",
  },
];

const BookList = () => {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
ReactDOM.render(<BookList />, document.getElementById("root"));
