import React from 'react';

import {
  Document,
  Head,
  Main,
} from '@react-ssr/express';

export default class extends Document {
  render() {
    return (
      <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.4.2/dist/css/uikit.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.4.2/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.4.2/dist/js/uikit-icons.min.js"></script>
        <title>Tweedr App</title>
      </Head>
      <body>
      <Main />
      </body>
      </html>
    );
  }
};