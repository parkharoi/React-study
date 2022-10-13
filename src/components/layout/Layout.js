import styled from "styled-components";
const Layout = (props) => {
  return <Wrap>{props.children}</Wrap>;
};
export default Layout;

const Wrap = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
