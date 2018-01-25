import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import App from './App';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import './index.css';

// const loggerMiddleware = createLogger();

const localStorageLogger = function ({ getState }) {
	return next => action => {
    // console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    next(action);

    //console.log('state after dispatch', getState())

    localStorage.setItem('learntronStore', JSON.stringify(getState()));

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    // return returnValue
  }
}

let store = createStore(
	reducers,
	applyMiddleware(
		thunkMiddleware,
    // loggerMiddleware,
		localStorageLogger
	)
);


render(
  <Provider store={store}>
	<App />
  </Provider>,
  document.getElementById('root')
)