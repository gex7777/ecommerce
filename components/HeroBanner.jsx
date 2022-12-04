import React from "react";
import { urlFor } from "../lib/client";
import Link from "next/link";
import Image from "next/image";
const HeroBanner = ({ bannerData }) => {
  console.log(bannerData);
  const src = urlFor(bannerData.image).url();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {src && (
          <div className=" relative h-96 w-96 max-w-xs md:max-w-sm">
            <Image
              src={src}
              alt="banner"
              fill
              className=" object-cover rounded-lg shadow-2xl"
              placeholder="empty"
            />
          </div>
        )}
        <div>
          <h1 className="text-5xl font-bold">{bannerData.title}</h1>
          <p className="py-6 ">{bannerData.desc}</p>
          <Link href={`/product/dates-and-carrot-cake`}>
            <button className="btn btn-primary">{bannerData.btnText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
