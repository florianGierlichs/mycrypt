import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import FullImage from './styledComponents/FullImage';
import SlideRight from '../assets/slideRight.svg';
import SlideLeft from '../assets/slideLeft.svg';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
`;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1800 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1800, min: 1300 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1300, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ImageContainer = styled.div`
  width: 45px;
`;

const ButtonRight = styled.button`
  position: absolute;
  right: 10px;
  outline: none;
  border: none;
  background: none;
  transition: all 0.5s;
  z-index: 1;
  &:active {
    transform: scale(0.9);
  }
  @media (max-width: 1020px) {
    right: 30%;
    bottom: 20px;
    position: fixed;
  }
`;

const ButtonLeft = styled.button`
  position: absolute;
  left: 10px;
  outline: none;
  border: none;
  background: none;
  transition: all 0.5s;
  z-index: 1;
  &:active {
    transform: scale(0.9);
  }
  @media (max-width: 1020px) {
    left: 30%;
    bottom: 20px;
    position: fixed;
  }
`;

const CustomRightArrow = ({ onClick }) => {
  return (
    <ButtonRight onClick={() => onClick()}>
      <ImageContainer>
        <FullImage src={SlideRight} alt="slide right arrow" />
      </ImageContainer>
    </ButtonRight>
  );
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <ButtonLeft onClick={() => onClick()}>
      <ImageContainer>
        <FullImage src={SlideLeft} alt="slide left arrow" />
      </ImageContainer>
    </ButtonLeft>
  );
};

export default function CarouselCustom({ userCoins = [] }) {
  return (
    <Carousel
      responsive={responsive}
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
    >
      {userCoins?.map(({ name, priceUsd, symbol, stock, id }) => (
        <CardContainer key={name}>
          <Card
            title={name}
            price={Number(priceUsd)}
            symbol={symbol}
            stock={stock}
            id={id}
          />
        </CardContainer>
      ))}
    </Carousel>
  );
}

CarouselCustom.propTypes = {
  userCoins: PropTypes.array,
};

CustomRightArrow.propTypes = {
  onClick: PropTypes.func,
};

CustomLeftArrow.propTypes = {
  onClick: PropTypes.func,
};
