import type { AppProps } from 'next/app';

import '../global.css';

const QogitaApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
);

export default QogitaApp;
