import "../styles/globals.css";
import React from "react";
import Layout from "../components/Layout";

import Toast from "../components/Toast";
import { GlobalState } from "../context/GlobalState";
function MyApp({ Component, pageProps }) {
  return (
    <GlobalState>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalState>
  );
}

export default MyApp;
