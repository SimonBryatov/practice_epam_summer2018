import React from 'react';
import './BookTable.css';

import BookItem from "../BookItem/BookItem"

let BookTable = ({books}) => {

     let renderBooks = () => (
        books.map((book, ind) => <BookItem key={ind} id={ind} info={book}/>)
     )
        return(
            <div className="BookTable">{renderBooks()}</div>
        )
    }

export default BookTable;