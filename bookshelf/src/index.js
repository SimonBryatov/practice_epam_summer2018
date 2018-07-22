import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { logger } from "redux-logger"
import rootReducer from './redux/rootReducer'

let middlewares = [];
if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger);
  }

const store = createStore(rootReducer, applyMiddleware(logger))

document.title = "Bookshelf"

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
