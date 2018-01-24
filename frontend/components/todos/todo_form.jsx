import React from 'react';
import { uniqueId } from '../../util/timestamp';
import _ from 'lodash';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    if (e.target.id === "title") {
      this.setState({ title: e.target.value });
    } else if (e.target.id === "body") {
      this.setState({ body: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ id: uniqueId(), done: false });
    // this.state = _.merge({id: uniqueId(), done: false }, this.state);
    console.log(this.state);
    this.props.createTodo(this.state);
    // this.setState({ title: "", body: "" });
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <label>Title:</label>
      <input id="title" type="text" onChange={this.update} value={this.state.title}></input>
      <br />
      <label>Body:</label>
      <input id="body" type="text" onChange={this.update} value={this.state.body}></input>
      <br />
      <button>Make New List Item!</button>
    </form>;
  }
}

export default TodoForm;
