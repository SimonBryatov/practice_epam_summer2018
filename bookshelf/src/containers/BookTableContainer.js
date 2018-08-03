import React from 'react';
import { connect } from 'react-redux'
import BookTable from "../components/BookTable/BookTable"

let BookTableContainer = ({books}) => (
    <React.Fragment>
    <BookTable books={books}/>
    </React.Fragment>
)

const mapSTP = (state) => ({
    books: state.logic.items
})

BookTableContainer = connect(mapSTP)(BookTableContainer)

export default BookTableContainer;