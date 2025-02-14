import styled from "styled-components";
import buildings from '../../data.json'
import Card from "./card";

const MainContainer = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 15px;
  justify-content: center;
  padding: 0 20px 10px 20px;
  position: relative;

  @media(max-width: 594px) {
    position: relative;
  }
`;

/**
 * The main section of the webpage
 * @returns Building cards displayed in grid layout
 */
const Main = () => {

  console.log("Buildings: ", buildings);

  return(
    <MainContainer>
      {
        buildings.map((building, idx) => (
          <Card numRooms={building.rooms_available} bgPic={building.building_picture} name={building.name} key={idx}/>
        ))
      }
    </MainContainer>
  )
};

export default Main;