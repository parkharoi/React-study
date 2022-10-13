import { useSelector } from "react-redux";
import Todo from "../todo/Todo";
import styled from "styled-components";

const List = () => {
  const todoList = useSelector((state) => state.todoList.list);
  return (
    <Wrap>
      <Title> Working </Title>
      <ContentsWrap>
        {todoList.map((item, idx) => (
          <>
            {item.isDone ? (
              ""
            ) : (
              <div key={item.id}>
                <Todo listData={item} />
              </div>
            )}
          </>
        ))}
      </ContentsWrap>

      <Title>Done </Title>
      <ContentsWrap>
        {todoList.map((item, idx) => (
          <>
            {!item.isDone ? (
              ""
            ) : (
              <div key={item.id}>
                <Todo listData={item} />
              </div>
            )}
          </>
        ))}
      </ContentsWrap>
    </Wrap>
  );
};
export default List;

const Wrap = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-top: 30px;
`;

const ContentsWrap = styled.div`
  display: flex;
  margin: 0 30px;
  gap: 10px;
  flex-wrap: wrap;
`;
