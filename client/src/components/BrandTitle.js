import styled from '@emotion/styled';
import colors from '../utils/colors';

const BrandTitle = styled.div`
  font-family: 'Audiowide', cursive;
  color: ${colors.complementaryPrimary};
  font-size: ${({ size }) => (size === 'big' ? 40 : 30)}px;
`;

export default BrandTitle;
