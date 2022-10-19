import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Jancy Teachers Food Products</title>
      </Head>
      <header className="sticky top-0 z-10 ">
        <Navbar />
      </header>
      <Toaster position="top-center" reverseOrder={false} />
      <main className="min-h-screen">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
