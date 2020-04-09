import styled from '@emotion/styled';
import colors from '../utils/colors';

const Input = styled.input`
  background-color: ${colors.primaryInputBackground};
  color: ${colors.primaryFont};
  font-size: 20px;
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
