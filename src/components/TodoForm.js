import React from "react";
import styled from "styled-components";

const TodoForm = (props) => {
  const { formValue, inputHandler, submitHandler, clearCompleted } = props;
  return (
    <StyledForm>
      <form>
        <h1>Todo List</h1>
        <div>
          <input
            name="newTodo"
            placeholder="Enter a new task..."
            value={formValue}
            onChange={inputHandler}
          />
        </div>
        <div>
          <button onClick={submitHandler}>Add to List</button>
          <button onClick={clearCompleted}>Clear Completed</button>
        </div>
      </form>
    </StyledForm>
  );
};

const StyledForm = styled.section`
  width: 40%;
  z-index: 1;
  order: -1;
  padding: 35vh 22px;
  box-shadow: 0 0 10px 2px black;
  -moz-box-shadow: 0 0 10px 2px black;
  height: 100vh;
  position: sticky;
  left: 0;
  top: 0;
  form {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    h1 {
      font-size: 32px;
      text-align: center;
      margin-bottom: 50px;
    }
    div {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;

      input {
        margin: 0 auto;
        text-align: center;
        font-family: "Roboto Slab", serif;
        font-weight: 700;
        font-size: 18px;
        border-bottom: 1px solid black;
        padding: 10px;
        &::placeholder {
          font-weight: 300;
          color: lightslategrey;
        }
      }
      button {
        cursor: pointer;
        padding: 10px;
        font-family: "Roboto Slab", serif;
        font-weight: 700;
        letter-spacing: .5px;
        background-color: slategrey;
        color: white;
      }
    }
  }
`;

export default TodoForm;
