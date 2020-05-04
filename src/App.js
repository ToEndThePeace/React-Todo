import React from "react";

import styled from "styled-components";
import { v4 as uuid } from "uuid";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class Todo {
  constructor(name) {
    this.task = name;
    this.id = uuid();
    this.completed = false;
  }
}
const initialTodoList = [
  new Todo("Get Crunk"),
  new Todo("Party On"),
  new Todo("Dance"),
  new Todo("Boogie "),
  new Todo("Eat Bagels"),
  new Todo("Buy bagels"),
  new Todo("I want a bagel"),
  new Todo("Brad Mondo")
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoList: initialTodoList,
      newTodo: ""
    };
  }
  // Todo List Handlers
  addTodo = (name) => {
    this.setState({
      todoList: [...this.state.todoList, new Todo(name)]
    });
  };
  toggleComplete = (index) => {
    this.setState({
      todoList: Object.assign([...this.state.todoList], {
        [index]: {
          ...this.state.todoList[index],
          completed: !this.state.todoList[index].completed
        }
      })
    });
  };
  // Form Handlers
  inputHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };
  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter((x) => x.completed === false)
    });
  };

  render() {
    return (
      <StyledApp>
        <TodoList
          todoList={this.state.todoList}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm
          formValue={this.state.newTodo}
          inputHandler={this.inputHandler}
          submitHandler={this.submitHandler}
          clearCompleted={this.clearCompleted}
        />
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  display: flex;
  flex-flow: row nowrap;
  min-height: 100%;
  font-family: "Roboto Slab", serif;
`;

export default App;
