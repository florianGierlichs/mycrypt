import React, { useState, createContext, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { UsernameContext } from './UsernameContext';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [userCoins, setUserCoins] = useState([]);
  const [username] = useContext(UsernameContext);

  async function getUserCardData() {
    const response = await fetch(`/api/users/${username}/coins`);
    const userCoins = await response.json();
    setUserCoins(userCoins);
  }

  useEffect(() => {
    if (username) {
      getUserCardData();
    }
  }, [username]);

  return (
    <CardContext.Provider value={[userCoins, getUserCardData]}>
      {children}
    </CardContext.Provider>
  );
};

CardProvider.propTypes = {
  children: PropTypes.array,
};
