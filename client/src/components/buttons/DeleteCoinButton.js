import React, { useContext } from 'react';
import styled from '@emotion/styled';
import colors from '../../utils/colors';
import Delete from '../../assets/deleteButton.svg';
import { CoinContext } from '../../utils/CoinContext';
import PropTypes from 'prop-types';
import FullImage from '../styledComponents/FullImage';

const Button = styled.button`
  border: none;
  background-color: ${colors.backgroundPrimary};
  outline: none;
  padding: 0 4px 0 7px;
  position: relative;
  bottom: -23px;
  &:active {
    transform: scale(0.98);
  }
`;

const ImageContainer = styled.div`
  width: 25px;
`;

export default function DeleteCoinButton({ coinName }) {
  const [, , updateUserCardData] = useContext(CoinContext);

  const handleClick = () => {
    async function deleteCoin() {
      const username = localStorage.getItem('username');
      try {
        const response = await fetch(`/api/users/${username}/coins`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            coin: coinName,
          }),
        });

        if (!response.ok) {
          throw new Error(response.error);
        }
      } catch (error) {
        console.log(error);
      } finally {
        updateUserCardData();
      }
    }

    deleteCoin();
  };

  return (
    <Button onClick={handleClick}>
      <ImageContainer>
        <FullImage src={Delete} alt="delete icon" />
      </ImageContainer>
    </Button>
  );
}

DeleteCoinButton.propTypes = {
  coinName: PropTypes.string,
};
