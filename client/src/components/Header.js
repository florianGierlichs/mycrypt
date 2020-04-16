import React, { useState } from 'react';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import Brand from './Brand';
import Menu from '../assets/dropdown-burger-menu.svg';
import Sidebar from './Sidebar';

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background-color: ${colors.backgroundPrimary};
  padding: 45px 15px 20px 15px;
  display: flex;
  justify-content: space-between;
  border-radius: 0 0 24px 24px;
  border: solid 1px ${colors.complementaryPrimary};
`;

const HeaderDropdownButton = styled.button`
  background-color: ${colors.backgroundPrimary};
  border: none;
  width: 50px;
  &:active {
    transform: scale(0.9);
  }
  z-index: 1;
  outline: none;
`;

const DropdownImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default function Header() {
  const [sidebar, setSidbar] = useState(false);
  const switchSidebar = () => {
    setSidbar(!sidebar);
  };
  return (
    <>
      <HeaderContainer>
        <Brand size="small" />
        <HeaderDropdownButton onClick={switchSidebar}>
          <DropdownImage src={Menu} alt="Burger-menu dropdown button" />
        </HeaderDropdownButton>
      </HeaderContainer>
      <Sidebar active={sidebar} />
    </>
  );
}
