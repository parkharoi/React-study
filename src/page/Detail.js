import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { readTodos } from "../redux/modules/todoList";
import styled from "styled-components";

const Detail = () => {
  const pram = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(readTodos(pram.id));
  }, []);

  const detailTodo = useSelector((state) => state.todoList.todo);

  return (
    <Wrap>
      <InnerWrap>
        <TopWrap>
          <span>ID : {detailTodo[0]?.id}</span>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            {" "}
            이전으로{" "}
          </button>
        </TopWrap>
        <Title>{detailTodo[0]?.title}</Title>
        <div>{detailTodo[0]?.content}</div>
      </InnerWrap>
    </Wrap>
  );
};
export default Detail;

const Wrap = styled.div`
  background-color: aliceblue;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopWrap = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;

  button {
    width: 100px;
    height: 30px;
  }
`;

const InnerWrap = styled.div`
  width: 50vw;
  height: 50vh;
  background-color: white;
  border-radius: 10px;
  padding: 20px 30px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  height: 150px;
`;
