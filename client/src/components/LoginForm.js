import React from 'react';
import Input from './Input';
import Button from './Button';
import styled from '@emotion/styled';
import colors from '../utils/colorsUtils';

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
  text-align: right;
`;

function LoginForm() {
  return (
    <>
      <FormContainer>
        <InputContainer>
          <Input></Input>
          <Input></Input>
        </InputContainer>
        <ButtonContainer>
          <Button>Login</Button>
          <SwitchForm>
            Dont have an account? <a href="*">Sign up!</a>
          </SwitchForm>
        </ButtonContainer>
      </FormContainer>
    </>
  );
}

export default LoginForm;
