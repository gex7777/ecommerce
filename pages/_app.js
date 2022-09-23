import "../styles/globals.css";
import React from "react";
import Layout from "../components/Layout";
import { StateContext } from "./../context/StateContext";
import Toast from "../components/Toast";
function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toast />
        <Component {...pageProps} />;
      </Layout>
    </StateContext>
  );
}

export default MyApp;
