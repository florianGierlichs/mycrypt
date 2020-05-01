import React, { useContext } from 'react';
import Header from '../components/Header';
import { CoinProvider } from '../utils/CoinContext';
import Cards from '../components/Cards';
import { UsernameContext } from '../utils/UsernameContext';

function Dashboard() {
  const [username] = useContext(UsernameContext);
  return (
    <>
      <CoinProvider>
        <Header
          username={username}
          lastLogin="01.04.2020 - 19:01"
          portfolio="8576,34"
        />
        <Cards />
      </CoinProvider>
    </>
  );
}

export default Dashboard;
