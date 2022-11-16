import React from "react";
import { BUSINESS_ADDRESS } from "../constants";

const Rpolicy = () => {
  return (
    <div className="container mx-auto my-7 px-4">
      <p className="font-bold text-xl py-4">Refund policy</p>
      <p className="font-bold text-xs">Returns</p>
      <p>Unfortunately, we cannot accept returns on food products.</p>
      <p className="font-bold text-xs">Damages and Issues</p>
      <p>
        Please inspect your order upon receipt and contact us immediately if the
        item is defective, damaged, or if you receive the wrong item, so that we
        may evaluate the issue and make it right.
      </p>
      <p className="font-bold text-xs">Refunds</p>
      <p>
        We will notify you once a refund was approved or not. If approved,
        you&rsquo;ll be automatically refunded on your original payment method
        within 10 business days. Please remember it can take some time for your
        bank or credit card company to process and post the refund too.
      </p>
      <p>
        You can always contact us for any refund questions at
        jancyteachersfoodproducts@gmail.com.
      </p>
      <p>
        If more than 15 business days have passed since we&rsquo;ve approved
        your return, please contact us at jancyteachersfoodproducts@gmail.com.
      </p>
    </div>
  );
};

export default Rpolicy;
