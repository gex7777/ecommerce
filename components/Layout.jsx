import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
import Cart from "./Cart";
import { useShoppingCart } from "../context/ShopContext";

import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";

const Layout = ({ children }) => {
  const { showCart } = useShoppingCart();
  return (
    <>
      <Head>
        <title>Jancy Teachers Food Products</title>
      </Head>
      <div
        className={`${showCart ? "h-screen" : "h-full"} drawer  drawer-end `}
      >
        <input
          id="my-drawer"
          type="checkbox"
          checked={showCart}
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Navbar />

          <Toaster position="top-center" reverseOrder={false} />
          <main>{children}</main>

          <Footer />
        </div>
        <div className="drawer-side">
          <Cart />
        </div>
      </div>
      <MessengerCustomerChat
        pageId={process.env.NEXT_PUBLIC_FACEBOOK_APP_PAGE_ID}
        appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
        version={"1.0"}
        xfbml={true}
      />
    </>
  );
};

export default Layout;
