/* eslint-disable react/prop-types */
import styled from "styled-components";

const CardWrapper = styled.div`
  border-radius: 6px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  @media (max-width: 594px) {
    display: flex;
    img{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      pointer-events: none;
      z-index: -1;
    }
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
  .small-screen {
    display: none;
  }

  @media (max-width: 594px) {
    position: relative;
    margin: 28px 20px;
    padding: 0 8px;
    height: 32px;
    border-radius: 12px;
    .small-screen {
      display: block;
    }
    .large-screen {
      display: none;
    }
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

  @media (max-width: 594px) {
    position: relative;
    margin: 20px;
    padding: 16px 0;
    background: none;
    color: white;
    font-weight: bold;
  }
`;

const Card = ({ numRooms, bgPic, name }) => {
  return(
    <CardWrapper>
      <NameWrapper>{name}</NameWrapper>
      <RoomsWrapper>
        <div></div>
        <span className="large-screen">{numRooms} rooms available</span>
        <span className="small-screen">{numRooms}/{numRooms}</span>
      </RoomsWrapper>
      <img src={`../../assets/${bgPic}`} alt="building" />
    </CardWrapper>
  )
};

export default Card;