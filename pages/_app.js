import "../styles/globals.css";
import React from "react";
import Layout from "../components/Layout";
import { LiveChatLoaderProvider, Messenger } from "react-live-chat-loader";
import { GlobalState } from "../context/GlobalState";
function MyApp({ Component, pageProps }) {
  return (
    <GlobalState>
      <Layout>
        <LiveChatLoaderProvider
          provider="messenger"
          providerKey={process.env.NEXT_PUBLIC_FACEBOOK_APP_PAGE_ID}
          appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
        >
          <Component {...pageProps} />
          <Messenger />
        </LiveChatLoaderProvider>
      </Layout>
    </GlobalState>
  );
}

export default MyApp;
