import React, { useState, createContext, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { UsernameContext } from './UsernameContext';
import { CoinDataContext } from './CoinDataContext';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [coinData] = useContext(CoinDataContext);
  const [username] = useContext(UsernameContext);

  function filterCoins(userCoins = []) {
    let filteredCoins = [];
    userCoins.forEach((coin) => {
      coinData.forEach((item) => {
        if (item.name === coin.name) {
          filteredCoins = [...filteredCoins, { ...coin, ...item }];
        }
      });
    });
    return filteredCoins;
  }

  async function getUserCoins() {
    try {
      const response = await fetch(`/api/users/${username}/coins/`);
      const userCoins = await response.json();

      return userCoins;
    } catch (error) {
      console.log(error);
    }
  }

  async function getUserCardData() {
    const userCoins = await getUserCoins();
    const filteredCoins = filterCoins(userCoins);

    setCards(filteredCoins);
  }

  useEffect(() => {
    getUserCardData();
  }, [coinData]);

  return (
    <CardContext.Provider value={[cards, getUserCardData]}>
      {children}
    </CardContext.Provider>
  );
};

CardProvider.propTypes = {
  children: PropTypes.array,
};
