import React from 'react';
import '../styles/BookItem.css';
import { connect } from "react-redux"

let BookItem = ({dispatch}) => (
            <div className="BookItem">
            <img className="BookItem-booklogo" src="http://www.apogeonline.com/2001/libri/88-7303-790-9/8873037909p400.gif" alt="1"/>
            <div className="BookItem-description">
            <p className="BookItem-field__name">Js for dums</p>
            <p className="BookItem-field__author">Some Author</p>
            <p className="BookItem-field__year">2015</p>
            </div>
            <div className="BookItem-controls">
            <button className="BookItem-btn" onClick={() => {}}>Edit</button>
            <button className="BookItem-btn">Delete</button>
            </div>
            </div>
        )

export default BookItem;