import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
// import uuid from 'uuid';
import axios from "axios";

import "./App.css";
//a state that multiple components need to access.our todos need go in a place where we can feed it down to different componets.put all our todos in the app.js
class App extends Component {
  state = {
    // fetch the todos from the jsonplaceholder
    todos: [],
  };
  // to make a request you want to use another lifecycle method
  // setting the todo from the jsonplaceholder to our state
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((res) => this.setState({ todos: res.data }));
  }

  // think of state like a cloud of data that hovers on components and we are just sending up to change it and rings back down. it is a one way data flow
  // changing the state of the particular check one. use setstate
  // Toggle Complete
  markComplete = (id) => {
    // setting set of todos. mapping through it to see if todo id matches that of the function
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete Todo
  // we use filter which is a higher order array method. it loops through and based on a condition it will return another array
  // copy everything that is already in the todos using a spread operator
  // we need the id as well to make a delete request
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
      this.setState({
        todos: [...this.state.todos.filter((todo) => todo.id !== id)],
      })
    );
  };

  // Add Todo
  // the spread operator allows us to make a copy of the state
  // making a post request to jsonplaceholder
  addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        // in es6 instead of doing title:tile because they are the same you can just do title
        title,
        completed: false,
      })
      .then((res) => {
        // res.data.id = uuid.v4();
        // setting state with our type in title, id and completed false. we spread opeartor
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  {/* passing the todos state to the Todos component as a prop. it is added like an HTML attribute */}
                  {/* we have a prop here called markcomplete. it is going to run whatevever we set here which is coming from TodoItem */}
                  {/* we dont add props because we are running it in the app.js */}
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
// axios an http library or use fetch Api
export default App;
