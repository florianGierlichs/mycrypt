import styled from '@emotion/styled';
import colors from '../utils/colorsUtils';

const Input = styled.input`
  background-color: ${colors.primaryInputBackground};
  color: ${colors.primaryFont};
  font-size: ${(props) => props.fontSize};
  border-radius: 14px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-left: 15px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export default Input;
