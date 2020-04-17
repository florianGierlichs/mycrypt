import React from 'react';
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

export default function Search() {
  return (
    <>
      <SearchInput type="search" value="" placeholder="search" />
    </>
  );
}
