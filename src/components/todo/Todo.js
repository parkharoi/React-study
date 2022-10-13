import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, updateTodo } from "../../redux/modules/todoList";

const Todo = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Wrap>
      <ItemBox>
        <ClickDetail>
          <span
            onClick={() => {
              navigate(`/detail/${props.listData.id}`);
            }}
          >
            ✏ 상세보기
          </span>
        </ClickDetail>
        <TitleBox>
          <span>{props.listData.title}</span>
        </TitleBox>
        <ContentsBox>{props.listData.content}</ContentsBox>

        <ButtonBox>
          <button
            onClick={() => {
              dispatch(deleteTodo(props.listData.id));
            }}
          >
            삭제하기
          </button>
          <button
            onClick={() => {
              dispatch(updateTodo(props.listData.id, props.listData.isDone));
            }}
          >
            {props.listData.isDone ? "취소" : "완료"}
          </button>
        </ButtonBox>
      </ItemBox>
    </Wrap>
  );
};
export default Todo;

const Wrap = styled.div`
  width: 400px;
  padding: 20px;
  background: cornflowerblue;
  border-radius: 20px;
  margin: 20px 10px;
`;

const ItemBox = styled.div`
  font-weight: 700;
  color: white;
`;

const ClickDetail = styled.div`
  font-size: 13px;
`;

const TitleBox = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const ContentsBox = styled.div`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  margin: 20px 10px;
`;

const ButtonBox = styled.div`
  border: none;
  text-align: center;

  button {
    padding: 10px;
    font-weight: 600;
    font-size: 15px;
    border: none;
    background: lightskyblue;
    color: aliceblue;
    margin: 10px 10px;
    border-radius: 20px;
    width: 150px;
  }
`;
