import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { BiMessageDots } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
const ContactInfo = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Lets talk</h1>
          <p className="py-6">We are availabe on facebook and whatsapp!</p>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body text-center">
              <div className="self-center">
                <BiMessageDots size={100} />
              </div>
              <div className="">message us on</div>
              <div className="flex justify-center">
                <span>
                  <a
                    target="_blank"
                    href=" https://wa.me/+919778398197"
                    className="cursor-pointer"
                  >
                    <AiOutlineWhatsApp size={25} />
                  </a>
                </span>
                <span>
                  <a
                    target="_blank"
                    href=" https://m.me/109946811906765"
                    className="cursor-pointer"
                  >
                    <RiMessengerLine size={25} />
                  </a>
                </span>
              </div>
              <div className="">jancyteachersfoodproducts@gmail.com</div>
            </div>
          </div>{" "}
          <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body text-center">
              <div className="self-center">
                <IoCallOutline size={100} />
              </div>
              <div className="">call us on </div>
              <div className="flex justify-center">
                <span>
                  <a
                    target="_blank"
                    href=" https://wa.me/+919778398197"
                    className="cursor-pointer"
                  >
                    <AiOutlineWhatsApp size={25} />
                  </a>
                </span>
                <span>
                  <a target="_blank" href=" tel:+919778398197">
                    +919778398197
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
