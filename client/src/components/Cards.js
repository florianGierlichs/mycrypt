import React, { useContext, useEffect } from 'react';
import { CardContext } from '../utils/CardContext';
import styled from '@emotion/styled';
import Card from './Card';

const CardContainer = styled.div`
  padding-top: 200px;
  display: flex;
`;

export default function Cards() {
  const [cards, setCards] = useContext(CardContext);
  const username = 'uppercase';

  console.log('!cards initial', cards);

  async function getUserCoins() {
    try {
      const response = await fetch(`/api/users/${username}/coins/`);
      const userCoins = await response.json();
      console.log('!userCoins beim rendern', userCoins);
      setCards(userCoins);
    } catch (error) {
      console.log(error);
    }
  }

  getUserCoins();

  useEffect(() => {
    getUserCoins();
  }, []);

  return (
    <CardContainer>
      {cards?.map(({ name, price, symbol }) => (
        <Card title={name} price={price} symbol={symbol} key={name} />
      ))}
    </CardContainer>
  );
}
