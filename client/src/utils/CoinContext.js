import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

export const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
  const [userCoins, setUserCoins] = useState([]);
  const [portfolio, setPortfolio] = useState(0);
  const username = localStorage.getItem('username');

  async function getUserCardData() {
    const response = await fetch(`/api/users/${username}/coins`);
    const userCoins = await response.json();
    const portfolio = userCoins
      .map((coin) => coin.stock * coin.priceUsd)
      .reduce((a, b) => a + b)
      .toFixed(3);

    setUserCoins(userCoins);
    setPortfolio(portfolio);
  }

  useEffect(() => {
    if (username) {
      getUserCardData();
    }
    // eslint-disable-next-line
  }, [username]);

  return (
    <CoinContext.Provider value={[userCoins, portfolio, getUserCardData]}>
      {children}
    </CoinContext.Provider>
  );
};

CoinProvider.propTypes = {
  children: PropTypes.array,
};
