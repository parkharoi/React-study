import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodos } from "../../redux/modules/todoList";

const Form = () => {
  const [todo, setTodo] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const addContents = () => {
    //addContents는 입력값을 객체화해서 action함수로 dispatch하는거
    const sendData = {
      title: title,
      content: todo,
    };

    dispatch(createTodos(sendData));
  };
  return (
    <Wrap>
      <div>
        <span>제목</span>
        <input
          onChange={(e) => {
            //onChange는 input값의 내용을 실시간으로 받아주는거
            setTodo(e.target.value);
          }}
          type="text"
        />
      </div>
      <div>
        <span>내용</span>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
        />
      </div>
      <button onClick={addContents}>추가하기</button>
    </Wrap>
  );
};
export default Form;

const Wrap = styled.div`
  padding: 20px;
  border-radius: 10px;
  margin: 20px 10px;
  background-color: cornflowerblue;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 18px;
    font-weight: 700;
    color: aliceblue;
    margin-right: 10px;
  }

  input {
    border-radius: 10px;
    padding: 10px;
    border: none;
    font-size: 16px;
    color: cornflowerblue;
    width: 240px;
  }

  button {
    border-radius: 15px;
    padding: 10px;
    font-weight: 700;
    font-size: 16px;
    border: none;
    background: lightskyblue;
    color: aliceblue;
  }
`;
