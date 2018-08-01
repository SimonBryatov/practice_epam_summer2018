import React from 'react';
import './BookItem.css';
import { connect } from "react-redux"
import {toggleModal} from "../redux/rootReducer"

let imgThunk = "../styles/noImage.png"

let BookItem = ({dispatch, info, id}) => (
            <div className="BookItem">
            <img className="BookItem-booklogo" src={info.imageUrl === "" ? imgThunk : info.imageUrl} alt={info.name}/>
            <div className="BookItem-description">
            <p className="BookItem-field__name">{info.name}</p>
            <p className="BookItem-field__author">{info.author}</p>
            <p className="BookItem-field__year">{info.year}</p>
            </div>
            <div className="BookItem-controls">
            <button className="BookItem-btn" onClick={() => dispatch(toggleModal(id))}>Edit</button>
            <button className="BookItem-btn" onClick={() => dispatch(toggleModal(id, "delete"))}>Delete</button>
            </div>
            </div>
        )
    
BookItem = connect()(BookItem)        

export default BookItem;