import styled from "styled-components";
import Search from "./search";
import Main from "./main";

const BodyWrapper = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  position: absolute;
  top: 60px;
  display: flex;
  flex-direction: column;
`;

/**
 * The body section of the webpage
 * @returns A body component that contains search bar and grid cards
 */
const Body = () => {
  return(
    <BodyWrapper>
      <Search />
      <Main />
    </BodyWrapper>
  )
};

export default Body;