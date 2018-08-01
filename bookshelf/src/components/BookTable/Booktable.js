import React from 'react';
import './Booktable.css';
import { connect } from 'react-redux'

import BookItem from "./BookItem"

let BookTable = ({books}) => {

     let renderContent = () => {
        let items = [];
        for (let i = 0; i < books.length; i++) {
            items.push(<BookItem key={i} id={i} info={books[i]}/>)
        }
        return items
    }
        return(
            <div className="BookTable">{renderContent()}</div>
        )
    }

    const mapSTP = (state) => ({
        books: state.logic.items
    })

BookTable = connect(mapSTP)(BookTable)

export default BookTable;