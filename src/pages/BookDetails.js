import React, { useState, useEffect, useParams } from "react";
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
      <div>
        <img src={book.cover}></img>
        <h3>Requested bookID: {book.id}</h3>
        <h3>Title: {book.title}</h3>
        <h3>Author: {book.author}</h3>
        <h3>Desc:: {book.description}</h3>
        <div>
            <Link to='/'>
                <h3>Back</h3>
            </Link>
        </div>
      </div>
    );
  }
};

export default BookDetails;
