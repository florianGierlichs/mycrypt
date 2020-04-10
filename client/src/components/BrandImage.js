import styled from '@emotion/styled';

const BrandImage = styled.img`
  width: ${(props) => (props.LoginPage ? '100px' : '50px')};
  margin-right: ${(props) => (props.LoginPage ? '15px' : '10px')};
`;

export default BrandImage;
