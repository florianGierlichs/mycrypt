import React from 'react';
import Header from '../components/Header';
import { CardProvider } from '../utils/CardContext';
import Cards from '../components/Cards';

function Dashboard() {
  return (
    <>
      <CardProvider>
        <Header
          userName="username123"
          lastLogin="01.04.2020 - 19:01"
          portfolio="8576,34"
        />
        <Cards />
      </CardProvider>
    </>
  );
}

export default Dashboard;
