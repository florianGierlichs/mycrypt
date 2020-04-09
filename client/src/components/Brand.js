import React from 'react';
import Logo from '../assets/mycrypt-logo.svg';
import styled from '@emotion/styled';
import LogoImage from './LogoImage';

const BRAND_CONTAINER = styled.div`
  display: flex;
`;

function Brand(props) {
  <BRAND_CONTAINER>
    <LogoImage src={Logo} alt="mycrypt Logo" width={props.width} />
  </BRAND_CONTAINER>;
}

export default Brand;
