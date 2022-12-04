import { Carousel as Caro } from "flowbite-react";

import Image from "next/image";
import React from "react";
import { urlFor } from "../lib/client";

const Carousel = ({ images }) => {
  return (
    <div className="h-[80vh] bg-base-200">
      <Caro className="relative">
        {images.map((image) => {
          const src = urlFor(image).url();
          return (
            <Image
              src={src}
              alt="..."
              className="object-contain h-full lg:w-2/4"
              width={400}
              height={400}
            />
          );
        })}
      </Caro>
    </div>
  );
};

export default Carousel;
