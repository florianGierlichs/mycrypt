import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import SearchList from './SearchList';
import PropTypes from 'prop-types';

const SearchInput = styled.input`
  background-color: ${colors.backgroundSecondary};
  color: ${colors.fontPrimary};
  padding: 7px 14px;
  border-radius: 14px 14px 0 0;
  border: none;
  outline: none;
  font-size: 20px;
  margin-top: 5px;
  max-width: 200px;
  &:focus + span {
    transform: scale(1);
  }
`;

const Underline = styled.span`
  height: 2px;
  width: 180px;
  background-color: ${colors.complementaryPrimary};
  transform: scale(0, 1);
  transition: all 0.5s linear;
`;

// Will be replaced with a real database
// const coins = [
//   {
//     id: 'bitcoin',
//     rank: '1',
//     name: 'Bitcoin',
//     symbol: 'BTC',
//     price: 6000,
//   },
//   {
//     id: 'ethereum',
//     rank: '2',
//     name: 'Ethereum',
//     symbol: 'ETH',
//     price: 6000,
//   },
//   {
//     id: 'bitcoin-cash',
//     rank: '3',
//     name: 'Bitcoin Cash',
//     symbol: 'BCH',
//     price: 1000,
//   },
//   {
//     id: 'bitcoin-sv',
//     rank: '4',
//     name: 'Bitcoin SV',
//     symbol: 'BSV',
//     price: 30,
//   },
// ];

const coinsDbJson =
  'https://my-json-server.typicode.com/florianGierlichs/mycrypt/db';

export default function Search({ active, username }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  useEffect(() => {
    async function getCoins() {
      const response = await fetch(`${coinsDbJson}`);
      const coinDatabase = await response.json();
      const coins = coinDatabase.data;
      const searchResult = coins.filter((coin) => {
        if (searchValue === '') {
          return;
        } else {
          return coin.id.startsWith(searchValue.toLowerCase());
        }
      });
      setSearchResults(searchResult);
    }
    getCoins();
  }, [searchValue]);
  useEffect(() => {
    if (!active) {
      setSearchValue('');
    }
  }, [active]);
  return (
    <>
      <SearchInput
        type="search"
        value={searchValue}
        placeholder="search"
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <Underline />
      <SearchList searchResults={searchResults} username={username} />
    </>
  );
}

Search.propTypes = {
  active: PropTypes.bool,
  username: PropTypes.string,
};
