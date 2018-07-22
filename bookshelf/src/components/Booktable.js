import React, { Component } from 'react';
import '../styles/Booktable.css';
import { connect } from 'react-redux'

import BookItem from "./BookItem"

let BookTable = ({books}) => {

     let renderContent = () => {
        let items = [];
        for (let i = 0; i < books.length; i++) {
            items.push(<BookItem key={i} info={books[i]}/>)
        }
        return items
    }
        return(
            <div className="BookTable">{renderContent()}</div>
        )
    }

    const mapSTP = (state) => ({
        books: state.items
    })

BookTable = connect(mapSTP)(BookTable)

export default BookTable;