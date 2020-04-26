import React, { useContext } from 'react';
import { CardContext } from '../utils/CardContext';
import styled from '@emotion/styled';
import Card from './Card';

const CardContainer = styled.div`
  display: flex;
`;

export default function Cards() {
  const [cards] = useContext(CardContext);
  console.log(cards);
  return (
    <CardContainer>
      {cards?.map(({ name, price, symbol }) => (
        <Card title={name} price={price} symbol={symbol} key={name} />
      ))}
    </CardContainer>
  );
}
