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
        <ContentBox>
          <Title>{detailTodo[0]?.title}</Title>
          <TextBox>{detailTodo[0]?.content}</TextBox>
        </ContentBox>
      </InnerWrap>
    </Wrap>
  );
};

export default Detail;

const Wrap = styled.div`
  background: cornflowerblue;
  padding: 20px;
  max-width: 1200px;
  min-width: 800px;
  height: 1200px;
  border: 1px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const InnerWrap = styled.div`
  border: 1px;
  justify-content: center;
  width: inherit;
  height: inherit;
  /* margin-top: 50px; */

  button {
    float: right;
    width: 100px;
    height: 30px;
  }
`;

const TopWrap = styled.div`
  border: 1px;
  width: inherit;
  height: 50px;
`;

const Title = styled.div`
  border: 1px;
  display: flex;
  flex-direction: column;
  font-size: 40px;
  margin: 0 auto;
  width: 200px;
  text-align: center;
`;

const ContentBox = styled.div`
  background-color: white;
  height: 400px;
  width: 400px;
  margin: 25% auto 0 auto;
  border-radius: 13px;
  font-size: 20px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const TextBox = styled.div`
  width: 200px;
  background-color: yellow;
  margin: 0 auto;
  text-align: center;
`;
