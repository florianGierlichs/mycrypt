import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import colors from '../utils/colors';
import Brand from './Brand';

const SidebarContainer = styled.div`
  width: 80%;
  height: 100vh;
  position: absolute;
  right: ${({ active }) => (!active ? -80 : 0)}%;
  background-color: ${colors.backgroundPrimary};
  border: 2px solid ${colors.complementaryPrimary};
  border-radius: 24px 0 0 24px;
  transition: all 700ms ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-right: 50px;
`;

const TitleContainer = styled.div`
  opacity: ${({ active }) => (!active ? 0 : 1)};
  transition: all 2.5s ease-out 1s;
`;

const UserName = styled.div`
  color: ${colors.fontPrimary};
`;

export default function Sidebar({ active, userName }) {
  return (
    <SidebarContainer active={active}>
      <TitleContainer active={active}>
        <Brand />
      </TitleContainer>
      <UserName>{userName}</UserName>
    </SidebarContainer>
  );
}

Sidebar.propTypes = {
  active: PropTypes.bool,
  userName: PropTypes.string,
};
