import React from 'react';
import Input from '../components/Input';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Input',
  component: Input,
  decorators: [withKnobs],
};

export const InputLogin = () => (
  <Input
    value={text('')}
    placeholder="Placeholder"
    Login
    onChange={action('user input')}
  />
);

export const InputSearch = () => (
  <Input value={text('')} Search onChange={action('user input')} />
);

export const InputStock = () => (
  <Input value={text('')} onChange={action('user input')} />
);
