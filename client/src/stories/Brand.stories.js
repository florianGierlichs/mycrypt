import React from 'react';
import Brand from '../components/Brand';

export default {
  title: 'Brand',
  component: Brand,
};

export const BrandDefault = () => <Brand logoWidth="100px" />;
export const BrandWidth50px = () => <Brand logoWidth="50px" />;
