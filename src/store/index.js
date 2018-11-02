import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as promise from 'redux-promise';
import logger from 'redux-logger';


let middlewares = [thunk, promise];

// Ensure the redux logger is not added in production.
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(
     applyMiddleware( ...middlewares)
);

export default store;