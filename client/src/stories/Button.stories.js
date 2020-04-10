import React from 'react';
import Button from '../components/Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  component: Button,
};

export const ButtonDefault = () => (
  <Button onClick={action('Button clicked')}>Button</Button>
);
