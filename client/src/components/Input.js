import styled from '@emotion/styled';
import COLORS from '../utils/COLORS';

const TextInput = styled.input`
  background-color: ${COLORS.primaryInputBackground};
  color: ${COLORS.primaryFont};
  font-size: 20px;
  border-radius: 14px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-left: 15px;
  border: none;
`;

export default TextInput;
