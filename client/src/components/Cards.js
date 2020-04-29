import React, { useContext } from 'react';
import { CardContext } from '../utils/CardContext';
import styled from '@emotion/styled';
import Card from './Card';

const CardContainer = styled.div`
  padding-top: 200px;
  display: flex;
`;

export default function Cards() {
  const [cards] = useContext(CardContext);

  return (
    <CardContainer>
      {cards?.map(({ name, priceUsd, symbol }) => (
        <Card
          title={name}
          price={Number(priceUsd)}
          symbol={symbol}
          key={name}
        />
      ))}
    </CardContainer>
  );
}
