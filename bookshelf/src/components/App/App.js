import React, { Component } from 'react';
import BookTableContainer from "../../containers/BookTableContainer"
import ModalContainer from "../../containers/ModalContainer"
import './App.css';
import { connect } from 'react-redux'
import {toggleModal} from "../../redux/actions/logicActions"

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalContainer />
        <div className="App-header">
          <div className="App-title">Bookshelf</div>
          <button className="App-button-add" onClick={() => {this.props.dispatch(toggleModal())}}>Add new book</button>
        </div>
        <BookTableContainer />
      </div>
    );
  }
}

App = connect()(App)

export default App;
