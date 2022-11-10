import React from "react";
import CollapseParagraph from "./../components/CollapseParagraph";

const Checkout = ({
  orderObj: { cartp } = {
    image:
      "https://cdn.pixabay.com/photo/2020/05/31/16/53/bookmarks-5243253_960_720.jpg",
    price: 45,
    quantity: 1,
    name: "maw",
  },
}) => {
  const cart = [
    {
      image:
        "https://cdn.pixabay.com/photo/2020/05/31/16/53/bookmarks-5243253_960_720.jpg",
      price: 45,
      quantity: 1,
      name: "maw",
      size: "200gm",
    },
  ];
  return (
    <div className="px-4 flex flex-col justify-center items-stretch gap-3 pb-3">
      <ul className="steps container mx-auto">
        <li className="step step-primary">Purchase</li>

        <li className="step">shipping adress</li>
        <li className="step">confirmation</li>
      </ul>

      <CollapseParagraph title="Cart summary">
        <div className="divide-y">
          {cart && cart.length > 0 && cart.map((item) => cartItem(item))}
        </div>
        <div className="flex flex-col text-xl">
          <div className="flex justify-between pt-4">
            <span>{"price(number of items)"}</span>
            <span>price</span>
          </div>
          <div className="flex justify-between pt-2">
            <span>{"website discount (5%)"}</span>
            <span className="text-green-500 ">-3</span>
          </div>
          <div className="flex justify-between pt-2 ">
            <div>
              <div>{"delivery Charges"}</div>
              <div className="text-xs text-red-700">
                {"(free delivery on orders above 500)"}
              </div>
            </div>
            <span className="text-yellow-500">address pending</span>
          </div>
        </div>
        <div class="border-y-2 border-dashed py-2 my-2">
          <div className="flex justify-between   text-2xl font-bold">
            <span>{"Total Amount"}</span>
            <span>total amount</span>
          </div>
        </div>
      </CollapseParagraph>

      <CollapseParagraph title="Shipping address"></CollapseParagraph>
    </div>
  );
};

export default Checkout;
function cartItem(item) {
  return (
    <div className="flex p-3 ">
      <div className="indicator ">
        <span className="indicator-item badge">{item.quantity}</span>
        <img className="object-cover h-28 w-28 " src={item.image} alt="maw" />
      </div>
      <div className="  flex flex-col justify-start  pl-5">
        <div className="text-xl font-bold">{`${item.name} (${item.size})`}</div>
        <div className="">{item.quantity + " qty"}</div>

        <div className=" pr-1 ">₹{item.price * item.quantity}</div>
      </div>
    </div>
  );
}
