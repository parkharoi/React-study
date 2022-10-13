import { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createTodos } from "../../redux/modules/todoList";

const Form = () => {
  const titleRef = useRef();
  const contentRef = useRef();
  const dispatch = useDispatch();

  const addContents = () => {
    const sendData = {
      title: titleRef.current.value,
      content: contentRef.current.value,
    };

    dispatch(createTodos(sendData));
    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  return (
    <Wrap>
      <div>
        <span>제목</span>
        <input type="text" ref={titleRef} />
      </div>
      <div>
        <span>내용</span>
        <input type="text" ref={contentRef} />
      </div>
      <button onClick={addContents}>추가</button>
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
