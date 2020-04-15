import React from 'react';
import Card from '../components/Card';

export default {
  title: 'Card',
  component: Card,
  // decorators: [withKnobs],
};

export const CardBitcoin = () => (
  <Card title="Bitcoin" priceValue="6574,64" id="btc" valueValue="56" />
);

export const CardEthereum = () => (
  <Card title="Ethereum" priceValue="124,64" id="miota" valueValue="5645" />
);
