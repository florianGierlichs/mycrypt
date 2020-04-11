import React from 'react';
import Input from './Input';
import Button from './Button';
import styled from '@emotion/styled';
import colors from '../utils/colorsUtils';
import PropTypes from 'prop-types';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  > * {
    flex-basis: 45%;
  }
`;

const InputContainer = styled.div`
  border: solid 2px ${colors.primaryYellow};
  border-radius: 24px;
  background-color: ${colors.primaryDark};
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 6px;

  justify-content: space-evenly;
`;

const FormContainer = styled.div`
  width: 300px;
`;

const SwitchForm = styled.div`
  color: ${colors.primaryFont};
  text-align: right;
  > * {
    color: ${colors.primaryYellow};
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

function AuthenticationForm({ type }) {
  return (
    <>
      <FormContainer>
        <InputContainer>
          <Input></Input>
          <Input></Input>
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
};

export default AuthenticationForm;
