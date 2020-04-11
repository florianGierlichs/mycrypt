import React from 'react';
import Logo from '../assets/mycrypt-logo.svg';
import styled from '@emotion/styled';
import BrandImage from './BrandImage';
import BrandTitle from './BrandTitle';
import PropTypes from 'prop-types';

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  width: ${({ size }) => {
    if (size === 'big') {
      return 300;
    }
    return 200;
  }}px;
`;

const BrandImageContainer = styled.div`
  width: 30%;
  margin-right: 15px;
`;

function Brand({ size }) {
  return (
    <BrandContainer size={size}>
      <BrandImageContainer>
        <BrandImage src={Logo} alt="mycrypt Logo" />
      </BrandImageContainer>
      <BrandTitle size={size}>mycrypt</BrandTitle>
    </BrandContainer>
  );
}

Brand.propTypes = {
  size: PropTypes.string,
};

export default Brand;
