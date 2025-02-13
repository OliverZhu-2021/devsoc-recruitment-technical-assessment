/* eslint-disable react/prop-types */
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 270px;
  height: 340px;
  border-radius: 6px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

const RoomsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  position: absolute;
  top: 0;
  right: 0;
  background: white;
  margin: 8px;
  border-radius: 8px;
  div {
    border-radius: 50%;
    height: 8px;
    width: 8px;
    background: green;
    margin-right: 8px;
  }
  span {
    font-size: 12px;
    font-weight: bold;
  }
`;

const NameWrapper = styled.div`
  width: calc(100% - 16px);
  height: 48px;
  background: var(--orange);
  display: flex;
  align-items: center;
  padding: 16px;
  position: absolute;
  bottom: 0;
  margin: 8px;
  border-radius: 6px;
`;

const Card = ({ numRooms, bgPic, name }) => {
  return(
    <CardWrapper>
      <RoomsWrapper>
        <div></div>
        <span>{numRooms} rooms available</span>
      </RoomsWrapper>
      <NameWrapper>{name}</NameWrapper>
      <img src={`../../assets/${bgPic}`} alt="building" />
    </CardWrapper>
  )
};

export default Card;