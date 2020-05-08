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
  z-index: 4;
  top: ${(props) => props.positionTop}px;
  right: ${(props) => props.active}px;
  position: absolute;
  transition: right 1s ease-in-out;
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
  active: PropTypes.number,
  positionTop: PropTypes.number,
};
