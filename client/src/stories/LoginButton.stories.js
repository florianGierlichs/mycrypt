import React from 'react';
import LoginButton from '../components/LoginButton';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'LoginButton',
  component: LoginButton,
  decorators: [withKnobs],
};

export const LoginButtonDefault = () => (
  <LoginButton
    value={text('')}
    placeholder="Placeholder"
    onClick={action('Button clicked')}
  >
    Button
  </LoginButton>
);
