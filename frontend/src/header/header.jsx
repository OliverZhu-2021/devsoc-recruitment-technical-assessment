import styled from 'styled-components';
import logo from '../../assets/freeRoomsLogo.png';
import logoClose from '../../assets/freeroomsDoorClosed.png';
import search from '../assets/search.svg';
import gridView from '../assets/grid-view.svg';
import map from '../assets/map.svg';
import darkMode from '../assets/dark-mode.svg';
import { useState } from 'react';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  background: white;
  letter-spacing: 2px;
  border-bottom: 2px solid #e8e9eb;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  img {
    height: 48px;
    width: 48px;
  }
  h3 {
    color: var(--orange);
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
  gap: 8px; 
`;

const IconBox = styled.div`
  padding: 8px;
  height: 36px;
  width: 36px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid var(--orange);
  img {
    width: 24px;
    height: 24px;
  }
`;

const IconBoxSelected = styled.div`
  padding: 8px;
  height: 36px;
  width: 36px;
  background: var(--orange);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid var(--orange);
  img {
    width: 24px;
    height: 24px;
  }
`;

/**
 * The header section of the page
 * @returns A styled header section
 */

const Header = () => {

  // State to track door open/close
  const [openDoor, setOpenDoor] = useState(true);

  return(
    <HeaderWrapper>
      <LogoWrapper onClick={() => {setOpenDoor(!openDoor)}}>
        {
          openDoor
          ?
          <img src={logo} alt="logo" />
          :
          <img src={logoClose} alt="logo door close"/>
        }
        <h3>Freerooms</h3>
      </LogoWrapper>
      <IconsWrapper>
        <IconBox>
          <img src={search} alt="search" />
        </IconBox>
        <IconBoxSelected>
          <img src={gridView} alt="grid view" />
        </IconBoxSelected>
        <IconBox>
          <img src={map} alt="map" />
        </IconBox>
        <IconBox>
          <img src={darkMode} alt="dark mode" />
        </IconBox>
      </IconsWrapper>
    </HeaderWrapper>
  )
};

export default Header;