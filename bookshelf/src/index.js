import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

document.title = "Bookshelf"
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
