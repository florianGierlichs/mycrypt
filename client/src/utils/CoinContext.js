import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

export const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
  const [userCoins, setUserCoins] = useState([]);
  const username = localStorage.getItem('username');
  async function getUserCardData() {
    const response = await fetch(`/api/users/${username}/coins`);
    const userCoins = await response.json();
    setUserCoins(userCoins);
  }

  useEffect(() => {
    if (username) {
      getUserCardData();
    }
    // eslint-disable-next-line
  }, [username]);

  return (
    <CoinContext.Provider value={[userCoins, getUserCardData]}>
      {children}
    </CoinContext.Provider>
  );
};

CoinProvider.propTypes = {
  children: PropTypes.array,
};
