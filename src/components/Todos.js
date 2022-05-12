import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    // acessing the todos passed doown from the state in app.js
    // map is an array method. it can return an array from an array. we use it to loop through the todos and out in jsx
    // console.log(this.props.todos);
    // the map is working like for Each. for Each todo
    // todo is passed in as a prop. because it is passed in as a prop to the TodoItem we can use it in the TodoItem component
    // markComplete is coming from TodoItem as a prop. it is where the event takes place but it climbing up to the app.js
    // this now has id
    return this.props.todos.map((todo) => <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />);
  }
}

// PropTypes
// prop type are sort of a validation that a component should have. we can set the type, required or not
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todos;
