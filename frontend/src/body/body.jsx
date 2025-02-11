import styled from "styled-components";

const BodyWrapper = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  background: yellow;
  position: absolute;
  top: 60px;
`;

const Body = () => {
  return(
    <BodyWrapper>
    </BodyWrapper>
  )
};

export default Body;