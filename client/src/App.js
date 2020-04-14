import React from 'react';
import Particles from 'react-particles-js';
import colors from './utils/colorsUtils';
import useWindowDimensions from './utils/hooks';

function App() {
  const { height, width } = useWindowDimensions();
  const particleNumbers = (height + width) / 15;
  return (
    <>
      <h1 style={{ color: 'white', margin: '50px' }}>Hello</h1>
      <Particles
        style={{
          background: `${colors.primaryDark}`,
          zIndex: '-1',
          width: '100%',
          height: '100%',
          position: 'fixed',
          top: '0',
          left: '0',
        }}
        params={{
          particles: {
            number: {
              value: particleNumbers,
            },
            size: {
              value: 5,
            },
            move: {
              speed: 2,
            },
          },
        }}
      />
    </>
  );
}

export default App;
