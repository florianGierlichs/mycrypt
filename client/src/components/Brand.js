import React from 'react';
import Logo from '../assets/mycrypt-logo.svg';
import styled from '@emotion/styled';
import LogoImage from './LogoImage';

const BrandContainer = styled.div`
  display: flex;
`;

function Brand(props) {
  <BrandContainer>
    <LogoImage src={Logo} alt="mycrypt Logo" width={props.width} />
  </BrandContainer>;
}

export default Brand;
