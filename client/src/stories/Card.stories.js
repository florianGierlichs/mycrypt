import React from 'react';
import Card from '../components/Card';
import styled from '@emotion/styled';

export default {
  title: 'Card',
  component: Card,
};

const Container = styled.div`
  padding: 50px;
`;

export const CardBitcoin = () => (
  <Container>
    <Card title="Bitcoin" price={6574.64} symbol="BTC" />
  </Container>
);

export const CardIota = () => (
  <Container>
    <Card title="Iota" price={0.1567} symbol="MIOTA" />
  </Container>
);
