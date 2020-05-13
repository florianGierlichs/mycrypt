import React, { useContext } from 'react';
import { CoinContext } from '../utils/CoinContext';
import styled from '@emotion/styled';
import CarouselCustom from './CarouselCustom';

const Container = styled.div`
  width: 100%;
  padding-top: 140px;
`;

export default function Cards() {
  const [userCoins] = useContext(CoinContext);

  return (
    <Container>
      <CarouselCustom userCoins={userCoins}></CarouselCustom>
    </Container>
  );
}
