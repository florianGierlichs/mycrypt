import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Brand from './Brand';

const BrandHeaderContainer = styled.div`
  opacity: ${({ active }) => (!active ? 1 : 0)};
  transition: all 1s ease-out 0.5s;
`;

export default function BrandHeader({ active }) {
  return (
    <BrandHeaderContainer active={active}>
      <Brand />
    </BrandHeaderContainer>
  );
}

BrandHeader.propTypes = {
  active: PropTypes.bool,
};
