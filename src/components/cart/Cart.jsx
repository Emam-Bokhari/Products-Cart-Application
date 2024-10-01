import { Fragment } from "react";
import BillDetails from "./BillDetails";

export default function Cart() {
  return (
    <Fragment>
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {/* Cart Item  */}
            <div className="cartCard xl:w-[1000px]">
              <div className="flex items-center col-span-6 space-x-6">
                {/* cart image  */}
                <img
                  className="lws-cartImage"
                  src="https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="product"
                />
                {/* cart item info  */}
                <div className="space-y-2 ">
                  <h4 className="lws-cartName ">
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop
                  </h4>
                  <p className="lws-cartCategory">Mens clothing</p>
                  <p>
                    BDT <span className="lws-cartPrice">1100</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                {/* amount buttons  */}
                <div className="flex items-center space-x-4">
                  <button className="lws-incrementQuantity">
                    <i className="text-lg fa-solid fa-plus"></i>
                  </button>
                  <span className="lws-cartQuantity">2</span>
                  <button className="lws-decrementQuantity">
                    <i className="text-lg fa-solid fa-minus"></i>
                  </button>
                </div>
                {/* price  */}
                <p className="text-lg font-bold">
                  BDT <span className="lws-calculatedPrice">2200</span>
                </p>
              </div>
              {/* delete button  */}
              <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button className="lws-removeFromCart">
                  <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
            {/* Cart Items Ends  */}
          </div>

          {/* Bill Details  */}
          <BillDetails />
        </div>
      </div>
    </Fragment>
  );
}
