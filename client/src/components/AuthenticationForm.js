import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import PropTypes from 'prop-types';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  > * {
    flex-basis: 45%;
  }
`;

const InputContainer = styled.div`
  border: solid 2px ${colors.complementaryPrimary};
  border-radius: 24px;
  background-color: ${colors.backgroundPrimary};
  display: flex;
  flex-direction: column;
  padding: 7.5px 15px;
  margin-bottom: 7.5px;
  justify-content: space-between;
  > * {
    margin: 7.5px 0;
  }
`;

const FormContainer = styled.form`
  width: 300px;
`;

const SwitchForm = styled.div`
  color: ${colors.fontPrimary};
  text-align: right;
  > * {
    color: ${colors.complementaryPrimary};
  }
`;

const form = {
  login: {
    buttonText: 'Login',
    switchFormQuestion: 'Dont have an account?',
    anchor: '/signup',
    linkTo: 'SignUp',
    switchFormAnswer: 'Signup!',
  },
  signup: {
    buttonText: 'Signup',
    switchFormQuestion: 'Already have an account?',
    anchor: '/login',
    linkTo: 'Login',
    switchFormAnswer: 'Login!',
  },
};

function AuthenticationForm({ type }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  localStorage.removeItem('username');

  async function loginUser() {
    try {
      const response = await fetch(`/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.status !== 200) {
        const error = await response.json();
        throw new Error(error.message);
      }

      localStorage.setItem('username', username);
      history.push(`/dashboard/${username}`);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  async function signupUser() {
    try {
      const response = await fetch(`/api/users/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.status !== 200) {
        const error = await response.json();
        throw new Error(error.message);
      }

      localStorage.setItem('username', username);
      history.push(`/dashboard/${username}`);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (type === 'login') {
      loginUser();
    } else if (type === 'signup') {
      signupUser();
    } else {
      return;
    }
  }

  function onUsernameChange(event) {
    setUsername(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            size="large"
            value={username}
            placeholder="Username"
            onChange={onUsernameChange}
          />
          <Input
            size="large"
            value={password}
            placeholder="Password"
            type="password"
            onChange={onPasswordChange}
          />
        </InputContainer>
        <ButtonContainer>
          <Button>{form[type].buttonText}</Button>
          <SwitchForm>
            {form[type].switchFormQuestion}{' '}
            <Link to={form[type].anchor}>{form[type].switchFormAnswer}</Link>
          </SwitchForm>
        </ButtonContainer>
      </FormContainer>
    </>
  );
}

AuthenticationForm.propTypes = {
  type: PropTypes.string,
};

export default AuthenticationForm;
