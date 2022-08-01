// import './MenuList.css';
import MenuListItem from "../MenuListItem/MenuListItem";
import React from "react";

export default function MenuList({ menuItems, handleAddToOrder }) {
  const items = menuItems.map((item) => (
    <MenuListItem
      key={item._id}
      menuItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  ));
  return (
    <>
      <div className="">
        <main className="MenuList ">{items}</main>
      </div>
    </>
  );
}
