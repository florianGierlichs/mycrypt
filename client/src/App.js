import React from 'react';
import Brand from './components/Brand';
import ParticlesBackground from './components/ParticlesBackground';
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Brand size="big" />
      <ParticlesBackground />
    </>
  );
}

export default App;
