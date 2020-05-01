import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import colors from '../utils/colors';
import Brand from './Brand';
import Search from './Search';

const SidebarContainer = styled.div`
  width: 80%;
  min-height: 100%;
  position: fixed;
  right: ${({ active }) => (!active ? -80 : 0)}%;
  background: linear-gradient(
    200deg,
    ${colors.backgroundPrimary},
    ${colors.backgroundQuaternary}
  );
  border: 2px solid ${colors.complementaryPrimary};
  border-radius: 24px 0 0 24px;
  transition: all 700ms ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  font-size: 20px;
  z-index: 2;
`;

const TitleContainer = styled.div`
  opacity: ${({ active }) => (!active ? 0 : 1)};
  transition: all 2.5s ease-out 1s;
  padding-right: 50px;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.fontPrimary};
  > * {
    margin-top: 30px;
  }
`;

const Username = styled.div`
  font-size: 1.5rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
`;

const PortfolioContainer = styled.div`
  margin-top: 5px;
  border: 1px solid ${colors.complementaryPrimary};
  border-radius: 14px;
  background-color: ${colors.backgroundPrimary};
  padding: 7px 24px;
`;

export default function Sidebar({ active, username, lastLogin, portfolio }) {
  return (
    <SidebarContainer active={active}>
      <TitleContainer active={active}>
        <Brand />
      </TitleContainer>
      <UserContainer>
        <Username>{username}</Username>
        <FlexContainer>
          <div>last Login:</div>
          <div>{lastLogin}</div>
        </FlexContainer>
        <FlexContainer>
          <div>Portfolio:</div>
          <PortfolioContainer>{portfolio} $</PortfolioContainer>
        </FlexContainer>
        <FlexContainer>
          <div>Add cryptocurrency</div>
          <Search active={active} username={username} />
        </FlexContainer>
      </UserContainer>
    </SidebarContainer>
  );
}

Sidebar.propTypes = {
  active: PropTypes.bool,
  username: PropTypes.string,
  lastLogin: PropTypes.string,
  portfolio: PropTypes.string,
};
