import React, { Component } from 'react';
import BookTable from "./Booktable"
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Bookshelf</h1>
          <button className="App-button-add">Add new book</button>
        </div>
        <BookTable />
      </div>
    );
  }
}

export default App;
