import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html data-theme="cupcake">
      <Head>
        <meta
          name="description"
          content="Jancy teacher's food products company's very own online store! Taking orders for cakes, snacks and more!"
        ></meta>
      </Head>

      <Main />
      <NextScript />
    </Html>
  );
}
