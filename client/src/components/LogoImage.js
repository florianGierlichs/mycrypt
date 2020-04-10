import styled from '@emotion/styled';

const LogoImage = styled.img`
  width: ${(props) => (props.LoginPage ? '100px' : '50px')};
`;

export default LogoImage;
