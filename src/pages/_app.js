import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

import Navbar from '../components/Navbar';
import '../styles/globals.css';

/* eslint-disable react/jsx-props-no-spreading */

const App = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Component {...pageProps} />
      </main>
    </div>

    <Script
      src="https://kit.fontawesome.com/7d15c82b1b.js"
      crossorigin="anonymous"
    />
    <Script src="https://cdn.jsdelivr.net/npm/apexcharts" />
    <Script src="https://cdn.jsdelivr.net/npm/react-apexcharts" />
  </ThemeProvider>
);

export default App;
