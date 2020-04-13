import React from 'react';
import GlobalStyles from '../src/components/GlobalsStyles';

const themeDecorator = (storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
);

export default themeDecorator;
