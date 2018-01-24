import Todo from './todo';
import React from 'react';

const TodoListItem = ({todo}) => {
  return (
    <li>
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <p>{todo.done ? "completed" : "uncompleted"}</p>
    </li>
  );
};

export default TodoListItem;
