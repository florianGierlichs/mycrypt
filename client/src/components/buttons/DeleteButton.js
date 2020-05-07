import React, { useContext } from 'react';
import styled from '@emotion/styled';
import colors from '../../utils/colors';
import Delete from '../../assets/deleteButton.svg';
import { CoinContext } from '../../utils/CoinContext';
import PropTypes from 'prop-types';

const DeleteImage = styled.img`
  width: 100%;
  height: 100%;
`;

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

export default function DeleteButton({ name }) {
  const [, , updateUserCardData] = useContext(CoinContext);

  const handleClick = () => {
    async function deleteCoin() {
      try {
        const response = await fetch('/api/users/coin/delete', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: localStorage.getItem('username'),
            coin: name,
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
    <Button onClick={() => handleClick()}>
      <ImageContainer>
        <DeleteImage src={Delete} alt="delete icon" />
      </ImageContainer>
    </Button>
  );
}

DeleteButton.propTypes = {
  name: PropTypes.string,
};
