import React from 'react';
import useWindowDimensions from './utils/hooks';
import Brand from './components/Brand';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const { height, width } = useWindowDimensions();
  const particleNumbers = (height + width) / 20;
  return (
    <>
      <Brand size="big" />
      <ParticlesBackground {...particleNumbers} />
    </>
  );
}

export default App;
