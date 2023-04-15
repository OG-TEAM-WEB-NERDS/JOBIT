import { Html, Head, Main, NextScript } from 'next/document';

import { Navbar } from '../components';

const Document = () => (
  <Html lang="en">
    <Head />
    <body className="container mx-auto px-4">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
