import React from 'react';
import Logo from '../assets/mycrypt-logo.svg';
import styled from '@emotion/styled';
import BrandImage from './BrandImage';
import BrandTitle from './BrandTitle';

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
`;

function Brand(props) {
  return (
    <BrandContainer>
      <BrandImage src={Logo} alt="mycrypt Logo" {...props} />
      <BrandTitle {...props}>mycrypt</BrandTitle>
    </BrandContainer>
  );
}

export default Brand;
