import React, { useState } from 'react';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import Menu from '../assets/dropdown-burger-menu.svg';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types';
import BrandHeader from './BrandHeader';

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

export default function Header({ username, lastLogin, portfolio }) {
  const [showSidebar, setShowSidbar] = useState(false);
  const toggleShowSidebar = () => {
    setShowSidbar(!showSidebar);
  };

  return (
    <>
      <HeaderContainer>
        <BrandHeader size="small" active={showSidebar} />
        <HeaderDropdownButton onClick={toggleShowSidebar}>
          <DropdownImage src={Menu} alt="Burger-menu dropdown button" />
        </HeaderDropdownButton>
      </HeaderContainer>
      <Sidebar
        active={showSidebar}
        username={username}
        lastLogin={lastLogin}
        portfolio={portfolio}
      />
    </>
  );
}

Header.propTypes = {
  username: PropTypes.string,
  lastLogin: PropTypes.string,
  portfolio: PropTypes.string,
};
