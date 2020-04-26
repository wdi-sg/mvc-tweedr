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
        <meta charSet="utf-8" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"/>
        <script src ="/public/scripts.js" />
        <title>Tweedr App</title>
      </Head>
      <body>
      <Main />
      </body>
      </html>
    );
  }
};