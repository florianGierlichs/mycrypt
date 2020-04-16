import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import colors from '../utils/colors';

const SidebarContainer = styled.div`
  width: 310px;
  height: 100vh;
  position: absolute;
  right: ${({ active }) => (!active ? -311 : 0)}px;
  background-color: ${colors.backgroundPrimary};
  border: 2px solid ${colors.complementaryPrimary};
  border-radius: 24px 0 0 24px;
  transition: all 700ms ease-in-out;
`;

export default function Sidebar({ active }) {
  return <SidebarContainer active={active}></SidebarContainer>;
}

Sidebar.propTypes = {
  active: PropTypes.bool,
};
