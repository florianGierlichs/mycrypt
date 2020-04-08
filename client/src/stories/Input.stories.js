import React from 'react';
import Input from '../components/Input';
import { withKnobs /*text*/ } from '@storybook/addon-knobs';
//import { action } from '@storybook/addon-actions';

export default {
  title: 'Input',
  component: Input,
  decorators: [withKnobs],
};

export const InputField = () => <Input value="" />;
