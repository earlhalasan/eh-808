import "./OrderListItem.css";

export default function OrderListItem({
  order,
  activeOrder,
  handleActiveOrder,
}) {
  return (
    <div
      className={`OrderListItem ${
        activeOrder && activeOrder._id === order._id ? "active" : ""
      }`}
      onClick={() => handleActiveOrder(order._id)}
    >
      <div>
        <div>
          Order Id: <span className="smaller">{order.orderId}</span>
        </div>
        <div className="smaller">
          {new Date(order.createdAt).toLocaleDateString()}
        </div>
      </div>
      <div className="align-rt">
        <div>${order.orderTotal.toFixed(2)}</div>
        <div className="smaller">{order.totalQty} Items</div>
      </div>
    </div>
  );
}
