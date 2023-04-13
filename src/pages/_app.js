import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

import Navbar from '../components/Navbar';
import '../styles/globals.css';

/* eslint-disable react/jsx-props-no-spreading */

const App = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>

    <Script src="https://kit.fontawesome.com/7d15c82b1b.js" crossorigin="anonymous" />
  </ThemeProvider>
);

export default App;
