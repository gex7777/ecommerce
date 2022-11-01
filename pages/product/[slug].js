import React, { useState } from "react";
import { client } from "../../lib/client";
import { RadioGroup } from "@headlessui/react";
import { urlFor } from "../../lib/client";
import { useShoppingCart, useStateContext } from "../../context/ShopContext";
import QuantityBtns from "../../components/QuantityBtns";
import { INCREMENT } from "./../../context/shopReducer";
import { toast } from "react-hot-toast";

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
      _id: product._id + product.size,
      size: selectedSize.name,
      quantity: 1,
      image: product.image[0],
      variants: product.variants,
      name: product.name,
      price: selectedSize.price,
    };
    console.log(productToPutInCart);
    dispatch({ action: INCREMENT, product: productToPutInCart });
    toast.success("added product to cart");
    setShowCart(true);
  };
  const buyNow = () => {
    addToCart();

    //navigate to checkout
  };
  return (
    <div className="">
      <div className="pt-6">
        {/* Image gallery */}
        <Carosel images={product.image} />

        {/* Product info */}
        <div className="mx-auto  px-4 pt-10 pb-16 sm:px-6 lg:grid  lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              ₹{selectedSize.price}
            </p>

            {/* Variants */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Weight</h3>
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
                              ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                              : "bg-gray-50 text-gray-200 cursor-not-allowed",
                            active ? "ring-2 ring-indigo-500" : "",
                            "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
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
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-indigo-500"
                                    : "border-transparent",
                                  "pointer-events-none absolute -inset-px rounded-md"
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute  inset-0 h-full  stroke-2 text-gray-200"
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

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights &&
                    product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
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
const Carosel = ({ images }) => {
  return (
    <>
      <div className=" mx-auto carousel w-full sm:w-80 lg:w-2/6 ">
        {images.map((image, i) => (
          <div id={`item${i + 1}`} className="carousel-item w-full">
            <img
              src={urlFor(image)}
              className="h-full  object-cover object-center"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
};
