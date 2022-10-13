import styled from "styled-components";

const Layout = (props) => {
  return <Wrap>{props.children}</Wrap>; //자기 안에 있는 값이 무엇인지 모르면 그려낼 수 없음
};
export default Layout;

const Wrap = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
