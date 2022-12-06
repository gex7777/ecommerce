import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html data-theme="cupcake">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta
          name="description"
          content="Jancy teacher's food products company's very own online store! Taking orders for cakes, snacks and more!"
        ></meta>

        <meta name="theme-color" content="#fff" />
      </Head>

      <Main />
      <NextScript />
    </Html>
  );
}
