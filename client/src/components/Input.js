import styled from '@emotion/styled';
import colors from '../utils/colors';

const inputSizes = {
  large: { padding: '12px' },
  small: { padding: '4px' },
};

const getInputPadding = (size = 'large') => {
  return inputSizes[size].padding;
};

const Input = styled.input`
  background-color: ${colors.backgroundSecondary};
  color: ${colors.fontPrimary};
  font-size: 20px;
  border-radius: 14px;
  padding: ${(props) => getInputPadding(props.size)};
  padding-left: 12px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export default Input;
