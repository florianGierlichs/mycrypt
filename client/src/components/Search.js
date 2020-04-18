import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import SearchList from './SearchList';

const SearchInput = styled.input`
  background-color: ${colors.backgroundSecondary};
  color: ${colors.fontPrimary};
  padding: 7px 14px;
  border-radius: 14px 14px 0 0;
  border: none;
  outline: none;
  font-size: 20px;
  margin-top: 5px;
`;

const coins = [
  {
    id: 'bitcoin',
    rank: '1',
  },
  {
    id: 'ethereum',
    rank: '2',
  },
  {
    id: 'bitcoin-cash',
    rank: '3',
  },
  {
    id: 'bitcoin-sv',
    rank: '4',
  },
  {
    id: 'bitcoin-cashed',
    rank: '3',
  },
  {
    id: 'bitcoin-sved',
    rank: '4',
  },
  {
    id: 'bitcoin-cashedre',
    rank: '3',
  },
  {
    id: 'bitcoin-svedef',
    rank: '4',
  },
];

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  useEffect(() => {
    const searchResult = coins.filter((coin) => {
      if (searchValue === '') {
        return;
      } else {
        return coin.id.startsWith(searchValue.toLowerCase());
      }
    });
    setSearchResults(searchResult);
  }, [searchValue]);
  return (
    <>
      <SearchInput
        type="search"
        value={searchValue}
        placeholder="search"
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <SearchList searchResults={searchResults} />
    </>
  );
}
