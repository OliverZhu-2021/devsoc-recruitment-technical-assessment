import styled from "styled-components";
import Search from "./search";

const BodyWrapper = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  position: absolute;
  top: 60px;
  display: flex;
  flex-direction: column;
`;

const Body = () => {
  return(
    <BodyWrapper>
      <Search />
    </BodyWrapper>
  )
};

export default Body;