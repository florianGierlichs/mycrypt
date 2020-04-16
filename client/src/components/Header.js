import React from 'react';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import Brand from './Brand';
import Menu from '../assets/dropdown-burger-menu.svg';

const HeaderContainer = styled.div`
  position: fixed;
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
`;

const DropdownImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Brand size="small" />
      <HeaderDropdownButton>
        <DropdownImage src={Menu} alt="Burger-menu dropdown button" />
      </HeaderDropdownButton>
    </HeaderContainer>
  );
}
