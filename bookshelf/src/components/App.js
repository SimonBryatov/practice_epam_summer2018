import React, { Component } from 'react';
import BookTable from "./Booktable"
import Modal from "./Modal"
import '../styles/App.css';
import { connect } from 'react-redux'
import {toggleModal} from "../redux/rootReducer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Modal shown={1}/>
        <div className="App-header">
          <h1 className="App-title">Bookshelf</h1>
          <button className="App-button-add" onClick={() => {this.props.dispatch(toggleModal())}}>Add new book</button>
        </div>
        <BookTable />
      </div>
    );
  }
}

App = connect()(App)

export default App;
