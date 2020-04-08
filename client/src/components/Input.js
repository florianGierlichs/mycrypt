import styled from '@emotion/styled';
import COLORS from '../utils/COLORS';

const TextInput = styled.input`
  border: 1px solid ${COLORS.primaryYellow};
  background-color: ${COLORS.primaryInputBackground};
  color: ${COLORS.primaryFont};
  font-size: 20px;
  border-radius: 14px;
  width: 200px;
  height: 50px;
`;

export default TextInput;
