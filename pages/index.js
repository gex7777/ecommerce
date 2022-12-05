import React from "react";
import {
  Navbar,
  HeroBanner,
  ProductList,
  Tutorials,
  Footer,
} from "../components";
import { client } from "../lib/client";

export default function Home({ products, bannerData }) {
  return (
    <>
      <HeroBanner bannerData={bannerData.length && bannerData[0]} />
      <ProductList products={products.length && products} />
    </>
  );
}
export const getStaticProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { products, bannerData },
  };
};
