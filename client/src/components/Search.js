import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import colors from '../utils/colors';

const SearchInput = styled.input`
  background-color: ${colors.backgroundSecondary};
  color: ${colors.fontPrimary};
  padding: 7px 14px;
  border-radius: 14px;
  border: none;
  outline: none;
  font-size: 20px;
  margin-top: 5px;
`;

const users = [
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
];

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    const searchResult = users.filter((coin) => {
      return coin.id.startsWith(searchValue.toLowerCase());
    });
    console.log(searchResult);
  }, [searchValue]);
  return (
    <>
      <SearchInput
        type="search"
        value={searchValue}
        placeholder="search"
        onChange={(event) => setSearchValue(event.target.value)}
      />
      {/* <ul>{searchResult}</ul> */}
    </>
  );
}
