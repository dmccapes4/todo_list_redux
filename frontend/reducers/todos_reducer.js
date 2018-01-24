import { RECEIVE_TODOS, RECEIVE_TODO, receiveTodo, receiveTodos }
      from '../actions/todo_actions';
import _ from 'lodash';

const todosReducer = (state = {}, action) => {

  const newState = {};
  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach(todo => {
        newState[todo.id] = todo;
      });
      return _.merge({}, state, newState);
    case RECEIVE_TODO:
      newState[action.todo.id] = action.todo;
      return _.merge({}, state, newState);
    default:
      return state;
  }
};

export default todosReducer;
