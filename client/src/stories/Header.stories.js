import React from 'react';
import Header from '../components/Header';

export default {
  title: 'Header',
  component: Header,
};

export const HeaderMobile = () => (
  <Header
    userName="username123"
    lastLogin="01.04.2020 - 19:01"
    portfolio="8576,34"
  />
);
