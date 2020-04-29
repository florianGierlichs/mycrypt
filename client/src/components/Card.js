import React, { useState } from 'react';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import PropTypes from 'prop-types';
import Input from './Input';
import Check from '../assets/checkButton.svg';

const CardContainer = styled.div`
  width: 300px;
  height: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${colors.complementaryPrimary};
  border-radius: 24px;
  background-color: ${colors.backgroundPrimary};
  font-size: 20px;
  color: ${colors.fontPrimary};
  box-shadow: 0 0 15px ${colors.backgroundPrimary};
`;

const CardTitleContainer = styled.div`
  width: 274px;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  padding: 10px;
  font-size: 1.5rem;
  border-bottom: 1px solid ${colors.complementaryPrimary};
`;

const CardDataContainer = styled.div`
  width: 254px;
`;

const CardDataKeyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const CardDataStockContainer = styled(CardDataKeyContainer)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;
`;

const DataKeyValue = styled.div`
  width: 140px;
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  overflow-y: auto;
`;

const CheckImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CheckButton = styled.button`
  width: 40px;
  border: none;
  background-color: ${colors.backgroundPrimary};
  outline: none;
  padding: 0 4px 0 7px;
  &:active {
    transform: scale(0.9);
  }
`;

const StockInput = styled(Input)`
  text-align: end;
  border-radius: 14px 0 0 14px;
  padding-right: 2px;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  max-width: 100px;
`;

const CurrencyIdContainer = styled.div`
  background-color: ${colors.backgroundSecondary};
  border-radius: 0 14px 14px 0;
  width: 50px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
`;

const StockInputContainer = styled.div`
  display: flex;
  width: 150px;
`;

export default function Card({ title, price, symbol }) {
  const [stockValue, setStockValue] = useState('');
  return (
    <>
      <CardContainer>
        <CardTitleContainer>{title}</CardTitleContainer>
        <CardDataContainer>
          <CardDataKeyContainer>
            Price
            <DataKeyValue>{price.toFixed(3)} $</DataKeyValue>
          </CardDataKeyContainer>
          <CardDataStockContainer>
            Stock
            <CheckButton>
              <CheckImage src={Check} alt="check icon" />
            </CheckButton>
            <StockInputContainer>
              <StockInput
                size="small"
                value={stockValue}
                type="number"
                placeholder="0"
                onChange={(event) => {
                  setStockValue(event.target.value);
                }}
              />
              <CurrencyIdContainer>{symbol}</CurrencyIdContainer>
            </StockInputContainer>
          </CardDataStockContainer>
          <CardDataKeyContainer>
            Value
            <DataKeyValue>
              {isNaN(stockValue) ? 0 : (price * stockValue).toFixed(3)} $
            </DataKeyValue>
          </CardDataKeyContainer>
        </CardDataContainer>
      </CardContainer>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  symbol: PropTypes.string,
};
