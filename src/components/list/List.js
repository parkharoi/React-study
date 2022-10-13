import styled from "styled-components";
import { useSelector } from "react-redux"; //useselector는 계속 store를 바라보는 친구라서 store의 값이 바뀌면 계속 값이 바뀐다.
import Todo from "../todo/Todo";

const List = () => {
  //부모임 List가 자식 Todo에서 리덕스로 같이 받으면 부모에서 내려주는 값이 변경되어서 props로 변경된 값을 입력함
  const create = useSelector((state) => state.todoList.list);

  return (
    <Wrap>
      <h4>Working</h4>
      <InnerWrap>
        {create.map((item) => (
          <div key={item.id}>{item.isDone ? "" : <Todo listData={item} />}</div>
        ))}
      </InnerWrap>

      <h4>Done</h4>
      <InnerWrap>
        {create.map((item) => (
          <div key={item.id}>{item.isDone ? <Todo listData={item} /> : ""}</div>
        ))}
      </InnerWrap>
    </Wrap>
  );
};
export default List;

const Wrap = styled.div``;

const InnerWrap = styled.div``;
