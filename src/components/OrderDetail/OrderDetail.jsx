// import './OrderDetail.css';
import LineItem from "../LineItem/LineItem";
import React from "react";

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({
  order,
  handleChangeQty,
  handleCheckout,
}) {
  if (!order) return null;

  const lineItems = order.lineItems.map((item) => (
    <LineItem
      lineItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  ));

  return (
    <div className=" mx-3 mb-3 p-3 rounded-lg bg-white">
      <div className="flex justify-between items-center px-5 py-2 font-medium text-2xl bg-[#fcbf49] rounded-lg text-center">
        {order.isPaid ? (
          <span>
            Order: &nbsp; <span className="float-right">{order.orderId}</span>
          </span>
        ) : (
          <span>Cart</span>
        )}
        {/* <span>{new Date(order.updatedAt).toLocaleDateString()}</span> */}
      </div>
      <div className="px-5 py-5">
        {lineItems.length ? (
          <>
            {lineItems}
            <section className="text-right">
              <div className="text-right pt-5">
                <span>Order quantity: {order.totalQty}</span>
              </div>
              &nbsp;&nbsp;
              <br />
              <span className="font-light text-2xl">
                Order Total: ${order.orderTotal.toFixed(2)}
              </span>
              <br />
              {order.isPaid ? (
                <span className="text-lg">&nbsp;&nbsp;</span>
              ) : (
                <button
                  className="btn-sm rounded-lg font-semibold hover:text-black hover:bg-[#fcbf49] duration-200"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >
                  Checkout
                </button>
              )}
            </section>
          </>
        ) : (
          <div className="hungry">Empty Cart</div>
        )}
      </div>
    </div>
  );
}
