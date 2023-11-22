import React from 'react'
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps: { ...pageProps } }: AppProps<{}>) {
    return (
        <main>
            <Component {...pageProps} />
        </main>
    );
  }