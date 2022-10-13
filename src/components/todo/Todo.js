import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodos, upDateTodos } from "../../redux/modules/todoList";
import { useNavigate } from "react-router-dom";

const Todo = ({ listData }) => {
  const 해라 = useDispatch(); //디스패치는 액션 함수에 접근할 수 있게 해주는것 (실행할 수 있게 도와줌)
  const navigate = useNavigate(); // 함수를 써서 navigate라는 객체를 만듬 이건 객체 리터럴

  console.log(listData);
  return (
    <div>
      <Wrap>
        <ItemBox>
          <ClickDetail>
            <span onClick={() => navigate(`/detail/${listData.id}`)}>
              {/* param값 주소에다가 실어서 넘겨주세요~라는 말 */}
              상세보기
            </span>
            {/* 라우터를 참조해서 디테일로 이동해주는거 */}
          </ClickDetail>
          <TitleBox>
            <span>{listData.title}</span>
          </TitleBox>
          <ContentBox>{listData.content}</ContentBox>
          <ButtonBox>
            <button
              onClick={() => {
                해라(deleteTodos(listData.id));
              }}
            >
              삭제하기
            </button>
            <button
              onClick={() => {
                해라(upDateTodos(listData.id, listData.isDone));
              }}
            >
              {listData.isDone ? "취소하기" : "완료하기"}
            </button>
          </ButtonBox>
        </ItemBox>
      </Wrap>
    </div>
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

const ContentBox = styled.div`
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
