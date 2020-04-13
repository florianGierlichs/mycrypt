import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          height: 100vh;
          font-size: 16px;
          margin: 0;
          font-family: 'Roboto', sans-serif;
        }
      `}
    />
  );
}

export default GlobalStyle;
