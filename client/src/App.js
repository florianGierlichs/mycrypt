import React from 'react';
import styled from '@emotion/styled';
import Particles from 'react-particles-js';
import { useState, useEffect } from 'react';
import colors from './utils/colorsUtils';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Test = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

function App() {
  const { height, width } = useWindowDimensions();
  const particleNumbers = (height + width) / 15;
  console.log(particleNumbers);
  return (
    <>
      <Test />
      <h1 style={{ color: 'white', margin: '50px' }}>Hello</h1>
      <Particles
        style={{
          background: `${colors.primaryDark}`,
          zIndex: '-10',
          width: '100%',
          height: '100%',
          position: 'fixed',
          top: '0',
          left: '0',
          margin: '0',
          padding: '0',
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
