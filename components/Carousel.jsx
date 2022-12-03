import { Carousel as Caro } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { urlFor } from "../lib/client";

const Carousel = ({ images }) => {
  return (
    <div className="h-[80vh] bg-base-200">
      <Caro>
        {images.map((image) => {
          return (
            <Image
              src={urlFor(image)}
              alt="..."
              className="object-contain h-full lg:w-2/4"
            />
          );
        })}
      </Caro>
    </div>
  );
};

export default Carousel;
