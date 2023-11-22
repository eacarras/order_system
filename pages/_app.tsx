import React from 'react'
import type { AppProps } from "next/app"

import "../styles/globals.css"


export default function MyApp({ Component, pageProps: { ...pageProps } }: AppProps<{}>) {
    return (
        <main>
            <Component {...pageProps} />
        </main>
    );
  }