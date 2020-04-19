import styled from '@emotion/styled';
import colors from '../utils/colors';

const Button = styled.button`
  background-color: ${colors.backgroundPrimary};
  color: ${colors.fontPrimary};
  font-size: 20px;
  border-radius: 14px;
  padding: 5px 15px;
  border: solid 2px ${colors.complementaryPrimary};
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${colors.backgroundSecondary};
  }
  &:active {
    transform: scale(0.95);
  }
`;

export default Button;
