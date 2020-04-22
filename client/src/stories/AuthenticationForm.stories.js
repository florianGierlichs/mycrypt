import React from 'react';
import AuthenticationForm from '../components/AuthenticationForm';
import styled from '@emotion/styled';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'AuthenticationForm',
  component: AuthenticationForm,
  decorators: [withKnobs],
};

const Container = styled.div`
  background-color: darkblue;
  padding: 20px;
`;

export const Login = () => (
  <Container>
    <AuthenticationForm
      type="login"
      valueUsername={text('Username')}
      valuePassword={text('Password')}
    />
  </Container>
);
export const SignUp = () => (
  <Container>
    <AuthenticationForm
      type="signup"
      valueUsername={text('Username')}
      valuePassword={text('Password')}
    />
  </Container>
);
