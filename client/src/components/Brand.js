import React from 'react';
import Logo from '../assets/mycrypt-logo.svg';
import styled from '@emotion/styled';
import BrandImage from './BrandImage';
import BrandTitle from './BrandTitle';

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
`;

const Box = styled.div`
  flex-grow: 1;
`;

function Brand(props) {
  return (
    <BrandContainer>
      <Box>
        <BrandImage src={Logo} alt="mycrypt Logo" {...props} />
      </Box>
      <BrandTitle {...props}>mycrypt</BrandTitle>
    </BrandContainer>
  );
}

export default Brand;
