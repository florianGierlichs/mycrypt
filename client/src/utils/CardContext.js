import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  return (
    <CardContext.Provider cardList={[cards, setCards]}>
      {children}
    </CardContext.Provider>
  );
};

CardProvider.propTypes = {
  children: PropTypes.any,
};
