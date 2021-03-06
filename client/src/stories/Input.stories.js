import React from 'react';
import Input from '../components/Input';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Input',
  component: Input,
  decorators: [withKnobs],
};

export const InputPlaceholder = () => (
  <Input
    size="large"
    value={text('')}
    placeholder="Placeholder"
    onChange={action('user input')}
  />
);

export const InputPassword = () => (
  <Input
    size="large"
    value={text('')}
    type="password"
    onChange={action('user input')}
  />
);
