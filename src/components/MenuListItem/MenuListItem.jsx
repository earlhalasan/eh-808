import "./MenuListItem.css";
import React from "react";

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className="MenuListItem rounded-lg mb-3">
      {/* <div className="emoji flex-ctr-ctr">{menuItem.emoji}</div> */}
      <div className="name font-semibold text-left">{menuItem.name}</div>
      <br />
      <div className="flex ">
        <img src={menuItem.image} width="300px" />
        <div className="flex flex-col pl-7">
          <div className="text-left">{menuItem.description}</div>
          <br />
          <br />

          <div className="buy text-center justify-end">
            <span>${menuItem.price.toFixed(2)}</span>
            <button
              className="btn-sm rounded-lg font-semibold hover:text-black hover:bg-[#fcbf49] duration-200"
              onClick={() => handleAddToOrder(menuItem._id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
