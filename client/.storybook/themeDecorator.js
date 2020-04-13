import React from 'react';
import GlobalStyles from '../src/components/GlobalStyles';

const themeDecorator = (storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
);

export default themeDecorator;
