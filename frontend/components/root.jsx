import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import Todo from './todos/todo';

const Root = ({ store }) => (
  <Provider store={ store }>
    <App />
  </Provider>
);

export default Root;
