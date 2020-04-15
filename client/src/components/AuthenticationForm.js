import React from 'react';
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

const FormContainer = styled.div`
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
    switchFormAnswer: 'Sign up!',
  },
  signUp: {
    buttonText: 'Sign up',
    switchFormQuestion: 'Already have an account?',
    anchor: '/login',
    linkTo: 'Login',
    switchFormAnswer: 'Login!',
  },
};

function AuthenticationForm({ type, valueUsername, valuePassword }) {
  return (
    <>
      <FormContainer>
        <InputContainer>
          <Input size="large" value={valueUsername} placeholder="Username" />
          <Input size="large" value={valuePassword} type="password" />
        </InputContainer>
        <ButtonContainer>
          <Button>{form[type].buttonText}</Button>
          <SwitchForm>
            {form[type].switchFormQuestion}{' '}
            <a href={form[type].anchor}>{form[type].switchFormAnswer}</a>
          </SwitchForm>
        </ButtonContainer>
      </FormContainer>
    </>
  );
}

AuthenticationForm.propTypes = {
  type: PropTypes.string,
  valueUsername: PropTypes.string,
  valuePassword: PropTypes.string,
};

export default AuthenticationForm;
