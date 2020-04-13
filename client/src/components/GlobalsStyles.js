import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          height: 100vh;
          font-size: 20px;
          margin: 0;
          font-family: 'Roboto', sans-serif;
        }
      `}
    />
  );
}

export default GlobalStyle;
