import React from 'react';
import Logo from '../assets/mycrypt-logo.svg';
import styled from '@emotion/styled';
import LogoImage from './LogoImage';
import BrandTitle from './BrandTitle';
import PropTypes from 'prop-types';

const BrandContainer = styled.div`
  display: flex;
`;

function Brand(props) {
  return (
    <BrandContainer>
      <LogoImage src={Logo} alt="mycrypt Logo" logoWidth={props.logoWidth} />
      <BrandTitle brandFontSize={props.brandFontSize}>mycrypt</BrandTitle>
    </BrandContainer>
  );
}

Brand.propTypes = {
  logoWidth: PropTypes.string.isRequired,
  brandFontSize: PropTypes.string.isRequired,
};

export default Brand;
