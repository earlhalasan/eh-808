import OrderListItem from "../OrderListItem/OrderListItem";

export default function OrderList({ orders, activeOrder, handleActiveOrder }) {
  return (
    <main className="OrderList">
      {orders.map((o) => (
        <OrderListItem
          order={o}
          activeOrder={activeOrder}
          handleActiveOrder={handleActiveOrder}
          key={o._id}
        />
      ))}
    </main>
  );
}
