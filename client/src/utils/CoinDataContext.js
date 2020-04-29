import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const CoinDataContext = createContext();

export const CoinDataProvider = ({ children }) => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const getCoinData = async () => {
      try {
        const response = await fetch('/api/coins');
        const coins = await response.json();
        setCoinData(coins);
      } catch (error) {
        console.log(error);
      }
    };
    getCoinData();
  }, []);

  return (
    <CoinDataContext.Provider value={[coinData]}>
      {children}
    </CoinDataContext.Provider>
  );
};

CoinDataProvider.propTypes = {
  children: PropTypes.array,
};
