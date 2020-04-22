import React from 'react';
import styled from '@emotion/styled';
import Brand from '../components/Brand';
import AuthenticationForm from '../components/AuthenticationForm';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

const BrandContainer = styled.div`
  margin-bottom: 100px;
`;

function Login() {
  return (
    <MainContainer>
      <BrandContainer>
        <Brand size="big" />
      </BrandContainer>
      <AuthenticationForm type="login" valueUsername={''} valuePassword={''} />
    </MainContainer>
  );
}

export default Login;
