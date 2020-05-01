import styled from '@emotion/styled';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import colors from '../utils/colors';

const SliderCustom = styled(Slider)`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;

  a.previousButton {
    left: 30%;
  }
  a.nextButton {
    right: 30%;
  }
  a.previousButton,
  a.nextButton {
    position: absolute;
    top: 90%;
    z-index: 1;
    padding: 10px;
    text-decoration: none;
  }

  .animateIn,
  .animateOut {
    transition: all 1s ease;
  }

  & > a {
    & > svg {
      & > polygon {
        fill: ${colors.complementaryPrimary};
      }
    }
  }
`;

export default SliderCustom;
