import styled from '@emotion/styled';
import colors from '../utils/colorsUtils';

const Button = styled.button`
  background-color: ${colors.primaryDark};
  color: ${colors.primaryFont};
  font-size: 20px;
  border-radius: 14px;
  padding: 5px 15px;
  border: solid 2px ${colors.primaryYellow};
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${colors.primaryInputBackground};
  }
  &:active {
    transform: scale(1.05);
  }
`;

export default Button;
