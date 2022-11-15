import { Carousel as Caro } from "flowbite-react";
import React from "react";
import { urlFor } from "../lib/client";

const Carousel = ({ images }) => {
  return (
    <div className="h-[80vh] ">
      <Caro>
        {images.map((image) => {
          return (
            <img
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
