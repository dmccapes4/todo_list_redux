import * as APIUtil from '../util/todo_api_util';
// import { dispatch, getState} from 'redux';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const FETCH_TODO = 'FETCH_TODO';

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

export const createTodo = (todo) => (dispatch) => {
  return APIUtil.makeTodo(todo).then(serverTodo => {
    dispatch(receiveTodo(serverTodo));
  });
};

export const fetchTodos = () => (dispatch) => {
  return APIUtil.getTodos().then(todos => {
    dispatch(receiveTodos(todos));
  });
};
