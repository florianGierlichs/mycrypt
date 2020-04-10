import styled from '@emotion/styled';
import colors from '../utils/colorsUtils';

const BrandTitle = styled.div`
  font-family: 'Audiowide', cursive;
  color: ${colors.primaryYellow};
  font-size: ${(props) => (props.big ? '40px' : '30px')};
  flex-grow: 2;
`;

export default BrandTitle;
