import styled from '@emotion/styled';
import colors from '../utils/colorsUtils';

const LoginButton = styled.button`
  background-color: ${colors.primaryDark};
  color: ${colors.primaryFont};
  width: 140px;
  height: 40px;
  font-size: 16px;
  border-radius: 14px;
  border: solid 2px ${colors.primaryYellow};
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${colors.primaryInputBackground};
  }

  &:active {
    transform: translateY(4px);
  }
`;

export default LoginButton;
