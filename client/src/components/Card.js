import React, { useState } from 'react';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import PropTypes from 'prop-types';
import Input from './Input';

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
  box-shadow: 10px 15px 10px ${colors.backgroundPrimary};
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
  width: 234px;
`;

const CardDataPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const CardDataStockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const CardDataValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const DataKeyValue = styled.div`
  width: 140px;
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
`;

const StockInput = styled(Input)`
  text-align: end;
  border-radius: 14px 0 0 14px;
  padding-right: 2px;
`;

const FlexContainer = styled.div`
  display: flex;
  max-width: 140px;
  > input {
    width: 140px;
  }
`;

export default function Card({ title, priceValue, id, valueValue }) {
  const [stockValue, setStockValue] = useState(`0 ${id}`);
  //   const stockValueWithId = `${stockValue} ${id}`;
  return (
    <>
      <CardContainer>
        <CardTitleContainer>{title}</CardTitleContainer>
        <CardDataContainer>
          <CardDataPriceContainer>
            Price
            <DataKeyValue>{priceValue} $</DataKeyValue>
          </CardDataPriceContainer>
          <CardDataStockContainer>
            Stock
            <FlexContainer>
              <StockInput
                size="small"
                value={stockValue}
                onChange={(event) => {
                  setStockValue(`${event.target.value}`);
                }}
              />
            </FlexContainer>
          </CardDataStockContainer>
          <CardDataValueContainer>
            Value
            <DataKeyValue>{valueValue} $</DataKeyValue>
          </CardDataValueContainer>
        </CardDataContainer>
      </CardContainer>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  priceValue: PropTypes.string,
  id: PropTypes.string,
  valueValue: PropTypes.string,
};
