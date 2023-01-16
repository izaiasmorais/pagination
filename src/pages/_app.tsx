import type { AppProps } from 'next/app';
import { client } from '@/services/QueryClient';
import { QueryClientProvider } from 'react-query';
import NextNProgress from 'nextjs-progressbar';

import '@tremor/react/dist/esm/tremor.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
        <NextNProgress color="#7F3DFF" />
      </QueryClientProvider>
    </>
  );
}
