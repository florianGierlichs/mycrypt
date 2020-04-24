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
      {cards?.map(({ title, price, symbol }) => (
        <Card title={title} price={price} symbol={symbol} />
      ))}
    </CardContainer>
  );
}
