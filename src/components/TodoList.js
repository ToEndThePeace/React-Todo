import React from "react";
import styled from "styled-components";

import Todo from "./Todo";

const TodoList = (props) => {
  const { todoList, toggleComplete } = props;

  return (
    <StyledList>
      {todoList.map((todo, index) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            index={index}
            toggleComplete={toggleComplete}
          />
        );
      })}
    </StyledList>
  );
};
const StyledList = styled.section`
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  min-height: 100%;
  width: 70%;
  padding: 20px 3%;
  background-color: slategrey;
`;

export default TodoList;
