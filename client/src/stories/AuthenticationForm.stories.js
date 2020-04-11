import React from 'react';
import AuthenticationForm from '../components/AuthenticationForm';
import styled from '@emotion/styled';

export default {
  title: 'AuthenticationForm',
  component: AuthenticationForm,
};

const Container = styled.div`
  background-color: darkblue;
  padding: 20px;
`;

export const Login = () => (
  <Container>
    <AuthenticationForm type="login" />
  </Container>
);
export const SignUp = () => (
  <Container>
    <AuthenticationForm type="signUp" />
  </Container>
);
