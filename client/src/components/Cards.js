import React, { useContext } from 'react';
import { CoinContext } from '../utils/CoinContext';
import styled from '@emotion/styled';
import Card from './Card';
import SliderCustom from './SliderCustom';

const CardsContainer = styled.div`
  padding-top: 150px;
  display: flex;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Cards() {
  const [coins] = useContext(CoinContext);

  return (
    <CardsContainer>
      <SliderCustom>
        {coins?.map(({ name, priceUsd, symbol }) => (
          <CardContainer key={name}>
            <Card title={name} price={Number(priceUsd)} symbol={symbol} />
          </CardContainer>
        ))}
      </SliderCustom>
    </CardsContainer>
  );
}
