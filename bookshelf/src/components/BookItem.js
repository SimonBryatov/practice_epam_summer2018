import React from 'react';
import '../styles/BookItem.css';
import { connect } from "react-redux"
import {toggleModal, deleteBook} from "../redux/rootReducer"

let imgThunk = "data:image/png;base64,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"

let BookItem = ({dispatch, info, id}) => (
            <div className="BookItem">
            <img className="BookItem-booklogo" src={info.imageUrl == "" ? imgThunk : info.imageUrl} alt={info.name}/>
            <div className="BookItem-description">
            <p className="BookItem-field__name">{info.name}</p>
            <p className="BookItem-field__author">{info.author}</p>
            <p className="BookItem-field__year">{info.year}</p>
            </div>
            <div className="BookItem-controls">
            <button className="BookItem-btn" onClick={() => dispatch(toggleModal(id))}>Edit</button>
            <button className="BookItem-btn" onClick={() => dispatch(deleteBook(id))}>Delete</button>
            </div>
            </div>
        )
    
BookItem = connect()(BookItem)        

export default BookItem;