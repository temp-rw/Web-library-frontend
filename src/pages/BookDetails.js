import React, { useState, useEffect } from "react";
import hostName from "../constants";
import { Link } from "react-router-dom";

const BookDetails = (props) => {
  const [book, setBook] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  let id = props.match.params.id;

  useEffect(() => {
    fetch(`${hostName}/library/book/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setBook(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container">
        <div className="row align-items-start">
          <div className="col"></div>
          <img src={book.cover} alt="book-cover" className="col-8"></img>
          <div className="col"></div>
          <div className="row align-items-start">
            <div className="col"></div>
            <div className="col-8">
              <h3>Id: {book.id}</h3>
              <h3>Title: {book.title}</h3>
              <h3>Author: {book.author}</h3>
              <h3>Desc: {book.description}</h3>
            </div>
            <div class="col"></div>
          </div>
        </div>
        <div className="row align-items-start">
          <div className="col"></div>
          <div className="navigation col-8">
            <Link to="/">
              <button className="btn btn-lg btn-outline-primary">
                <h3>Back</h3>
              </button>
            </Link>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
};

export default BookDetails;
