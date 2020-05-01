import React, { useState, useEffect, useContext } from 'react';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import SearchList from './SearchList';
import PropTypes from 'prop-types';
import { CoinDataContext } from '../utils/CoinDataContext';

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

export default function Search({ active, username }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [coinData] = useContext(CoinDataContext);

  useEffect(() => {
    async function getCoins() {
      const searchResult = coinData.filter((coin) => {
        if (searchValue === '') {
          return null;
        } else {
          return coin.id.startsWith(searchValue.toLowerCase());
        }
      });
      setSearchResults(searchResult);
    }
    getCoins();
    // eslint-disable-next-line
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
