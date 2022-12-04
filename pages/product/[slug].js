import React, { useState } from "react";
import { client } from "../../lib/client";
import { RadioGroup } from "@headlessui/react";
import { urlFor } from "../../lib/client";
import { useShoppingCart, useStateContext } from "../../context/ShopContext";
import QuantityBtns from "../../components/QuantityBtns";
import { INCREMENT } from "./../../context/shopReducer";
import { toast } from "react-hot-toast";
import Carousel from "../../components/Carousel";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails({ product }) {
  const { cartState, dispatch, setShowCart } = useShoppingCart();

  const [selectedSize, setSelectedSize] = useState(product.variants[0]);
  const productInCart = cartState?.cart?.find(
    (prod) => prod?._id == product._id && prod.size === selectedSize.name
  );
  const addToCart = () => {
    const productToPutInCart = {
      _id: product._id,
      size: selectedSize.name,
      quantity: 1,
      image: product.image[0],
      variants: product.variants,
      name: product.name,
      price: selectedSize.price,
    };

    dispatch({ action: INCREMENT, product: productToPutInCart });
    toast.success("added product to cart");
  };
  const buyNow = () => {
    addToCart();
    setShowCart(true);
  };
  return (
    <div className="">
      <div className="pt-6">
        {/* Image gallery */}
        <Carousel images={product.image} />

        {/* Product info */}
        <div className="mx-auto  px-4 pt-10 pb-16 sm:px-6 lg:grid  lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r  lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight  sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight">₹{selectedSize.price}</p>

            {/* Variants */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Weight</h3>
              </div>

              <RadioGroup
                value={selectedSize}
                onChange={setSelectedSize}
                className="mt-4"
              >
                <RadioGroup.Label className="sr-only">
                  Choose packet weight
                </RadioGroup.Label>
                <div className="grid grid-cols-4 gap-4 z-o sm:grid-cols-8 lg:grid-cols-4">
                  {product.variants.map((size) => {
                    return (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.instock}
                        className={({ active }) =>
                          classNames(
                            size.instock
                              ? " shadow-sm  cursor-pointer"
                              : "  cursor-not-allowed",
                            active ? "ring-2 ring-primary-500" : "",
                            "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-base-50  sm:flex-1 sm:py-6"
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">
                              {size.name}
                            </RadioGroup.Label>
                            {size.instock ? (
                              <span
                                className={classNames(
                                  active ? "border	" : "border-2",
                                  checked
                                    ? "border-primary-content"
                                    : "border-transparent",
                                  "pointer-events-none absolute -inset-px rounded-md"
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 "
                              >
                                <svg
                                  className="absolute  inset-0 h-full  stroke-2 "
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    );
                  })}
                </div>
              </RadioGroup>
            </div>
            {productInCart ? (
              <div className="mt-4 flex">
                <QuantityBtns product={productInCart} />
              </div>
            ) : (
              <div className="flex justify-between">
                <button onClick={addToCart} className=" my-6 btn btn-primary">
                  add to cart
                </button>
                <button
                  onClick={buyNow}
                  className=" my-6 btn btn-secondary disabled"
                >
                  buy now
                </button>
              </div>
            )}
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r  lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base ">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium ">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights &&
                    product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="">{highlight}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium ">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm ">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export const getStaticPaths = async () => {
  const query = `*[_type=='product']{
        slug{
            current
        }
    }
`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type=="product" && slug.current=='${slug}'][0]`;
  const product = await client.fetch(query);

  return {
    props: { product },
  };
};
