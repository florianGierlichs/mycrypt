import React from 'react';
import Logo from '../assets/mycrypt-logo.svg';
import styled from '@emotion/styled';
import LogoImage from './LogoImage';
import BrandTitle from './BrandTitle';

const BrandContainer = styled.div`
  display: flex;
`;

function Brand(props) {
  return (
    <BrandContainer>
      <LogoImage src={Logo} alt="mycrypt Logo" {...props} />
      <BrandTitle {...props}>mycrypt</BrandTitle>
    </BrandContainer>
  );
}

export default Brand;
