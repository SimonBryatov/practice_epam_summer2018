import React from 'react';
import '../styles/BookItem.css';
import { connect } from "react-redux"
import {toggleModal} from "../redux/rootReducer"

let BookItem = ({dispatch, info}) => (
            <div className="BookItem">
            <img className="BookItem-booklogo" src="http://www.apogeonline.com/2001/libri/88-7303-790-9/8873037909p400.gif" alt="1"/>
            <div className="BookItem-description">
            <p className="BookItem-field__name">{info.name}</p>
            <p className="BookItem-field__author">{info.author}</p>
            <p className="BookItem-field__year">{info.year}</p>
            </div>
            <div className="BookItem-controls">
            <button className="BookItem-btn" onClick={() => dispatch(toggleModal(info.name, info.author, info.year, info.imageUrl))}>Edit</button>
            <button className="BookItem-btn">Delete</button>
            </div>
            </div>
        )
    
BookItem = connect()(BookItem)        

export default BookItem;