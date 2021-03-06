import TodoList from './todo_list';
import { connect } from 'react-redux';
import { receiveTodo, receiveTodos, fetchTodos, createTodo } from
  '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';
import React from 'react';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
