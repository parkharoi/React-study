import styled from "styled-components";

const Header = () => {
  return (
    <Wrap>
      <InnerWrap>
        <span>My Todo List</span>
      </InnerWrap>
    </Wrap>
  );
};
export default Header;

const Wrap = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  background: lightskyblue;
  border-radius: 10px;
`;

const InnerWrap = styled.div`
  height: 45px;
  display: flex;
  align-items: center;

  border-radius: 10px;

  span {
    font-weight: 800;
    font-size: 20px;
    color: white;
    text-align: center;
  }
`;
