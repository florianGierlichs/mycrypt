import React, { useContext } from 'react';
import { CardContext } from '../utils/CardContext';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import Add from '../assets/addButton.svg';
import PropTypes from 'prop-types';

const ListContainer = styled.ul`
  list-style-type: none;
  background-color: ${colors.backgroundSecondary};
  margin: 0;
  margin-bottom: 20px;
  display: block;
  width: 100%;
  padding: 5px 0 5px 20px;
  border-radius: 0 0 14px 14px;
  overflow: auto;
  max-height: 130px;
`;

const AddButton = styled.button`
  border: none;
  background-color: ${colors.backgroundSecondary};
  padding: 3px 3px 0 0;
  outline: none;
`;

const AddButtonLabel = styled.label`
  display: flex;
  align-items: center;
  &:active {
    transform: scale(0.98);
    background-color: ${colors.backgroundQuaternary};
  }
  &:active > * {
    background-color: ${colors.backgroundQuaternary};
  }
`;

const AddButtonImage = styled.img`
  width: 100%;
  height: 100%;
`;

const AddButtonImageContainer = styled.div`
  width: 25px;
  margin-right: 15px;
`;

export default function SearchList({ searchResults, username }) {
  const [cards, setCards] = useContext(CardContext);
  const handleClick = (searchResult) => {
    async function addSearchResultInDatabase() {
      try {
        const response = await fetch('/api/users/addCrypto', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            searchResult: searchResult,
          }),
        });

        if (response.status !== 200) {
          throw new Error(response.error);
        }
      } catch (error) {
        console.log(error);
      }
    }

    addSearchResultInDatabase();
    const clonedCards = [...cards];
    clonedCards.push(searchResult);
    setCards(clonedCards);
    console.log(clonedCards);
  };
  return (
    <ListContainer>
      {searchResults?.map((searchResult) => (
        <li key={searchResult.id}>
          <AddButtonLabel>
            <AddButton onClick={() => handleClick(searchResult)}>
              <AddButtonImageContainer>
                <AddButtonImage src={Add} alt="cross icon" />
              </AddButtonImageContainer>
            </AddButton>
            {searchResult.id}
          </AddButtonLabel>
        </li>
      ))}
    </ListContainer>
  );
}

SearchList.propTypes = {
  searchResults: PropTypes.array,
  username: PropTypes.string,
};
