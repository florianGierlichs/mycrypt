import styled from '@emotion/styled';
import colors from '../utils/colorsUtils';

const BrandTitle = styled.div`
  font-family: 'Audiowide', cursive;
  color: ${colors.primaryYellow};
  font-size: ${(props) => props.brandFontSize};
`;

export default BrandTitle;
