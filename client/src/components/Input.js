import styled from '@emotion/styled';
import colors from '../utils/colorsUtils';

const inputSize = {
  large: { padding: '10px', margin: '7px' },
};

const getInputPadding = (size) => {
  return inputSize[size].padding;
};

const getInputMargin = (size) => {
  return inputSize[size].margin;
};

const Input = styled.input`
  background-color: ${colors.primaryInputBackground};
  color: ${colors.primaryFont};
  font-size: 20px;
  border-radius: 14px;
  padding: ${(props) => getInputPadding(props.size)};
  margin: ${(props) => getInputMargin(props.size)};
  border: none;
  &:focus {
    outline: none;
  }
`;

export default Input;
