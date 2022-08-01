import { Link } from "react-router-dom";
import "./OrderHistoryPage.css";
// import Logo from "../../components/Logo/Logo";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import OrderList from "../../components/OrderList/OrderList";
import * as ordersAPI from "../../utilities/orders-api";
import React, { useState, useEffect } from "react";

export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(orders[0]);

  useEffect(function () {
    async function getPastOrders() {
      const orders = await ordersAPI.getOrders();
      setOrders(orders);
      setActiveOrder(orders[0]);
    }
    getPastOrders();
  }, []);

  function handleActiveOrder(id) {
    setActiveOrder(orders.find((o) => o._id === id));
  }

  return (
    <main className="OrderHistoryPage pt-[4.3rem] w-screen h-screen">
      <aside className="bg-white border-[1px] mx-3 rounded-lg mb-3 flex">
        <div className="justify-between items-center px-5 py-2 m-2 font-medium text-2xl bg-[#fcbf49] rounded-lg object-fill">
          Order History
        </div>
        {/* <Logo /> */}
        <div className="pt-5 px-2">
          <Link
            to="/orders/new"
            className="py-3 px-5 rounded-lg font-semibold hover:text-black hover:bg-[#fcbf49] duration-200 bg-[#003049] text-white"
          >
            Back to Store
          </Link>
        </div>
        {/* <UserLogOut user={user} setUser={setUser} /> */}
      </aside>
      <OrderList
        orders={orders}
        activeOrder={activeOrder}
        handleActiveOrder={handleActiveOrder}
      />
      <OrderDetail order={activeOrder} />
    </main>
  );
}
