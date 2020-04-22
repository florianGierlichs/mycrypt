import React from 'react';
import styled from '@emotion/styled';
import Brand from '../components/Brand';
import AuthenticationForm from '../components/AuthenticationForm';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Signup() {
  return (
    <MainContainer>
      <Brand size="big" />
      <AuthenticationForm type="signup" valueUsername={''} valuePassword={''} />
    </MainContainer>
  );
}

export default Signup;
