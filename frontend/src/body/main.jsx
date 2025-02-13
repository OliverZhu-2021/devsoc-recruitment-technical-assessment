import styled from "styled-components";
import buildings from '../../data.json'
import Card from "./card";

const MainContainer = styled.div`
  flex-grow: 1;
  background: #dddddd
`;

const Main = () => {

  console.log("Buildings: ", buildings);
  // For development
  const agsm = buildings[0];

  return(
    <MainContainer>
      <Card numRooms={agsm.rooms_available} bgPic={agsm.building_picture} name={agsm.name} />
    </MainContainer>
  )
};

export default Main;