import React from 'react';
import Header from '../components/Header';
import { CoinProvider } from '../utils/CoinContext';
import Cards from '../components/Cards';
import { useHistory } from 'react-router-dom';

function Dashboard() {
  const username = localStorage.getItem('username');
  const history = useHistory();

  if (!username) {
    history.push(`/login`);
  }

  return (
    <>
      <CoinProvider>
        <Header username={username} lastLogin="01.04.2020 - 19:01" />
        <Cards />
      </CoinProvider>
    </>
  );
}

export default Dashboard;
