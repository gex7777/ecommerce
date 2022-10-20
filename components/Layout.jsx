import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
import Cart from "./Cart";
import { useShoppingCart } from "../context/ShopContext";
import HeroBanner from "./HeroBanner";

const Layout = ({ children }) => {
  const { showCart } = useShoppingCart();
  return (
    <>
      <Head>
        <title>Jancy Teachers Food Products</title>
      </Head>
      <div className="drawer drawer-end">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div className="drawer-content">
          <Navbar />

          <Toaster position="top-center" reverseOrder={false} />
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
        <div className="drawer-side">
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Layout;
