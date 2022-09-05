import React from "react";
import {
  Navbar,
  HeroBanner,
  ProductList,
  Tutorials,
  Footer,
} from "../components";

const products = [
  {
    id: "1",
    href: "/",
    imageSrc:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    imageAlt: "/",
    name: "test",
    price: "1000",
  },
  {
    id: "2",
    href: "/",
    imageSrc:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    imageAlt: "/",
    name: "test",
    price: "1000",
  },
];
export default function Home() {
  return (
    <>
      <Navbar /> <HeroBanner /> <ProductList products={products} />
      <Tutorials />
      <Footer />
    </>
  );
}
export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { products, bannerData },
  };
};
