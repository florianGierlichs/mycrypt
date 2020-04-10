import styled from '@emotion/styled';
import colors from '../utils/colorsUtils';

const LoginInputContainer = styled.span`
  border: solid 2px ${colors.primaryYellow};
  border-radius: 24px;
  background-color: ${colors.primaryDark};
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin-bottom: 6px;
`;

export default LoginInputContainer;
