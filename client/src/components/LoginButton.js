import styled from '@emotion/styled';
import colors from '../utils/colors';

const LoginButton = styled.button`
  background-color: ${colors.primaryDark};
  color: ${colors.primaryFont};
  font-size: ${(props) => props.fontSize};
  border-radius: 14px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  &:focus {
    outline: none;
  }
`;

export default LoginButton;
