import React from 'react';
import Header from '../components/Header';
import { CardProvider } from '../utils/CardContext';

function Dashboard() {
  return (
    <>
      <CardProvider>
        <Header
          userName="username123"
          lastLogin="01.04.2020 - 19:01"
          portfolio="8576,34"
        />
      </CardProvider>
    </>
  );
}

export default Dashboard;
