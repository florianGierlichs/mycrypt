import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const CoinDataContext = createContext();

export const CoinDataProvider = ({ children }) => {
  const [coinData, setCoinData] = useState([]);

  const getCoinData = async () => {
    try {
      const response = await (
        await fetch('https://api.coincap.io/v2/assets', { mode: 'cors' })
      ).json();
      setCoinData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoinData();
  }, []);

  return (
    <CoinDataContext.Provider value={[coinData, getCoinData]}>
      {children}
    </CoinDataContext.Provider>
  );
};

CoinDataProvider.propTypes = {
  children: PropTypes.array,
};
