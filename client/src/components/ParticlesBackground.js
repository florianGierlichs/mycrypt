import React from 'react';
import Particles from 'react-particles-js';
import colors from '../utils/colorsUtils';
import PropTypes from 'prop-types';

function ParticlesBackground(props) {
  return (
    <>
      <Particles
        style={{
          background: `linear-gradient(200deg, ${colors.primaryDark}, ${colors.backgroundSecondary})`,
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
              value: props.particleNumbers,
            },
            size: {
              value: 3,
            },
            move: {
              speed: 0.7,
            },
            color: {
              value: `${colors.primaryFont}`,
            },
            line_linked: {
              color: `${colors.primaryFont}`,
            },
          },
        }}
      />
    </>
  );
}

ParticlesBackground.propTypes = {
  particleNumbers: PropTypes.number,
};

export default ParticlesBackground;
