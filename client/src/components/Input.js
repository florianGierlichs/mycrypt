import styled from '@emotion/styled';
import colors from '../utils/colorsUtils';

const inputSizes = {
  large: { padding: '10px' },
};

const getInputPadding = (size = 'large') => {
  return inputSize[size].padding;
};

const Input = styled.input`
  background-color: ${colors.primaryInputBackground};
  color: ${colors.primaryFont};
  font-size: 20px;
  border-radius: 14px;
  padding: ${(props) => getInputPadding(props.size)};
  border: none;
  &:focus {
    outline: none;
  }
`;

export default Input;
