import React from 'react';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import PropTypes from 'prop-types';

const Container = styled.div`
  padding: 4px 8px;
  border: 1px solid ${colors.complementaryPrimary};
  border-radius: 14px;
  color: ${colors.fontPrimary};
  background-color: ${colors.backgroundSecondary};
  top: ${({ positionTop }) => positionTop}px;
  right: ${({ active }) => (active ? '40' : '-20')}px;
  position: absolute;
  transition: all 1s ease-out;
  opacity: ${({ active }) => (active ? 1 : 0)};
`;

export default function Notification({ active, positionTop, children }) {
  return (
    <Container active={active} positionTop={positionTop}>
      {children}
    </Container>
  );
}

Notification.propTypes = {
  children: PropTypes.any,
  active: PropTypes.bool,
  positionTop: PropTypes.number,
};
