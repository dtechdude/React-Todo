import React, { Component } from "react";
import PropTypes from "prop-types";

// you would want to have your field as a piece of state for the component
export class AddTodo extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    //   we need to pass this up to the App component
    // we also need to pass the title up. whatever we type in
    this.props.addTodo(this.state.title);
    // clear the field
    this.setState({ title: "" });
  };
  //   onChange = (e) => this.setState({ title: e.target.value });
  //   setting the state of the title as we change the input field
  // if we had more field, name password you won't want to create different onchange for each

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      // when writing nline style double {{}}
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input type="text" name="title" style={{ flex: "10", padding: "5px" }} placeholder="Add Todo ..." value={this.state.title} onChange={this.onChange} />
        <input type="submit" value="Submit" className="btn" style={{ flex: "1" }} />
      </form>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
