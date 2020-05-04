import React from "react";

import styled from "styled-components";
import { v4 as uuid } from "uuid";

class Todo {
  constructor(name) {
    this.name = name;
    this.id = uuid();
    this.completed = false;
  }
}
const initialTodoList = [new Todo("Get Crunk"), new Todo("Party On")];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <StyledApp>
        <h2>Welcome to your Todo App!</h2>
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`

`;

export default App;
