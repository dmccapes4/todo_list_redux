import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/root';
import configureStore from './store/store';
import { receiveTodo, receiveTodos, fetchTodos} from './actions/todo_actions';
import App from './components/app';
import { allTodos } from './reducers/selectors';
import * as APIUtil from './util/todo_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;
  window.getTodos = APIUtil.getTodos;
  // window.store.dispatch(fetchTodos());
  ReactDOM.render(<Root store={store}/>, root);
});
