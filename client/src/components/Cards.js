import React, { useContext } from 'react';
import { CardContext } from '../utils/CardContext';
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
  const [cards] = useContext(CardContext);

  return (
    <CardsContainer>
      <SliderCustom>
        {cards?.map(({ name, priceUsd, symbol }) => (
          <CardContainer key={name}>
            <Card title={name} price={Number(priceUsd)} symbol={symbol} />
          </CardContainer>
        ))}
      </SliderCustom>
    </CardsContainer>
  );
}
