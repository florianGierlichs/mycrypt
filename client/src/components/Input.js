import styled from '@emotion/styled';
import colors from '../utils/colorsUtils';

const calculateWidth = (props) => {
  if (props.Login) {
    return '250px';
  } else if (props.Search) {
    return '180px';
  } else {
    return '140px';
  }
};

const calculateHeight = (props) => {
  if (props.Login) {
    return '50px';
  } else if (props.Search) {
    return '30px';
  } else {
    return '30px';
  }
};

const Input = styled.input`
  background-color: ${colors.primaryInputBackground};
  color: ${colors.primaryFont};
  font-size: 20px;
  border-radius: 14px;
  width: ${(props) => calculateWidth(props)};
  height: ${(props) => calculateHeight(props)};
  padding-left: 15px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export default Input;
