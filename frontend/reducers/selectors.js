import Todo from '../components/todos/todo';
import store from '../store/store';

export const allTodos = (state) => {
  return Object.keys(state.todos).map(id => state.todos[id]);
};
