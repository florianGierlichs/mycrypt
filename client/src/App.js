import React from 'react';
import useWindowDimensions from './utils/hooks';
import Brand from './components/Brand';
import ParticlesBackground from './components/ParticlesBackground';
import GlobalStyles from './components/GlobalStyles';

function App() {
  const { height, width } = useWindowDimensions();
  const particleNumbers = (height + width) / 20;
  return (
    <>
      <GlobalStyles />
      <Brand size="big" />
      <ParticlesBackground {...particleNumbers} />
    </>
  );
}

export default App;
