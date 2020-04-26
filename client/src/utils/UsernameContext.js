import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const UsernameContext = createContext();

export const UsernameProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  return (
    <UsernameContext.Provider value={[username, setUsername]}>
      {children}
    </UsernameContext.Provider>
  );
};

UsernameProvider.propTypes = {
  children: PropTypes.any,
};
