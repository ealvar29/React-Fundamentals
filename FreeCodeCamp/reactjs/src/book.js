import React from "react";

const Book = (props) => {
  //attribute, eventHandler
  // onClick, onMouseOver
  const { img, title, author } = props.book;
  const clickHandler = () => {
    alert("hello!");
  };

  const complex = () => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log({ title })}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Testing onClick functions
      </button>
      <button type="button" onClick={() => complex(author)}>
        more complex examples
      </button>
    </article>
  );
};

export default Book;
