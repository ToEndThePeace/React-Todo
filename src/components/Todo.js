import React from "react";
import styled from "styled-components";

const Todo = (props) => {
  const { toggleComplete, index } = props;
  const { task, id, completed } = props.todo;
  return (
    <StyledTodo
      className={completed}
      onClick={() => {
        toggleComplete(index);
      }}
    >
      {task}
    </StyledTodo>
  );
};

const StyledTodo = styled.div`
  background-color: white;
  color: #92C;
  font-size: 28px;
  font-weight: 700;
  width: 40%;
  margin: 20px 5%;
  padding: 20px 10px;
  border: 1px solid black;
  box-shadow: 5px 5px 10px 1px black;
  cursor: pointer;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  &.true {
    text-decoration: line-through;
    color: #C8F;
    order: 1;
  }
`;

export default Todo;
