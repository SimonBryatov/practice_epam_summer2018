import React, { Component } from 'react';
import '../styles/Booktable.css';

import BookItem from "./BookItem"

class BookTable extends Component {

    renderContent() {
        let items = [];
        for (let i = 0; i < 5; i++) {
            items.push(<BookItem />)
        }
        return items
    }

    render() {
        return(
            <div className="BookTable">{this.renderContent()}</div>
        )
    }
}

export default BookTable;