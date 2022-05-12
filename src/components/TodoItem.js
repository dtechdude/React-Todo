import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  // you can put your style in a function we are doing this because we want the style to depending on if the todo  is completed or not
  //   getStyle = () => {
  //     if (this.props.todo.completed) {
  //       return {
  //         textDecoration: "line-through",
  //         color: "green",
  //       };
  //     } else {
  //       return {
  //         textDecoration: "none",
  //       };
  //     }
  //   };
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  componentDidMount = (props) => {
    console.log(this.props.todo);
  };
  // in jsx allows us to have our mockup, functionality and styling all in our component
  render() {
    //   dsetructuring - pulling the id and title from the todo
    const { id, title, completed } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          {/* creating a method/event called onchange. we are calling this.props.markComplete when we check the box. the "" is just giving it space */}
          {/* using id and title pulled from dsetructuring instead of this.props.title */}
          {/* we are binding the id to the props being passed upward */}
          {/* we are calling the method on a prop with onClick,onChange that is going to be passed up to the app.js*/}
          <input type="checkbox" defaultChecked={completed} onChange={this.props.markComplete.bind(this, id)} /> {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
// prop type are sort of a validation that a component should have. we can set the type, required or not
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;

// component drilling - we have our state in the app.js file. we have to climb the ladder from TodoItems to Todos and then App.js. we do that through props. we can recreate methods inside our props
