import React, { useContext } from 'react';
import Header from '../components/Header';
import { CardProvider } from '../utils/CardContext';
import Cards from '../components/Cards';
import { UsernameContext } from '../utils/UsernameContext';

function Dashboard() {
  const [username] = useContext(UsernameContext);
  return (
    <>
      <CardProvider>
        <Header
          username={username}
          lastLogin="01.04.2020 - 19:01"
          portfolio="8576,34"
        />
        <Cards />
      </CardProvider>
    </>
  );
}

export default Dashboard;
