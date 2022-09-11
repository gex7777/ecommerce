import React from "react";
import { urlFor } from "../lib/client";
const HeroBanner = ({ bannerData }) => {
  console.log(bannerData);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={urlFor(bannerData.image)}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{bannerData.title}</h1>
          <p className="py-6">{bannerData.desc}</p>
          <button className="btn btn-primary">{bannerData.btnText}</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
