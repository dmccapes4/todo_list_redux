import Todo from './todo';
import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
import store from '../../store/store';


class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {

    return (
      <section class="todo-list">
        <TodoForm createTodo={this.props.createTodo} />
        <ul>
          {
            this.props.todos.map((todo, i) => (
               <TodoListItem todo={todo} key={i} />
            ))
          }
        </ul>
    </section>
    );
  }
}

export default TodoList;
