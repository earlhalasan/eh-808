// import './OrderDetail.css';
import LineItem from "../LineItem/LineItem";

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
    <div className="OrderDetail">
      <div className="section-heading">
        {order.isPaid ? (
          <span>
            Orders <span className="smaller">{order.orderId}</span>
          </span>
        ) : (
          <span>Orders</span>
        )}
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {lineItems.length ? (
          <>
            {lineItems}
            <section className="total">
              {order.isPaid ? (
                <span className="right">TOTAL&nbsp;&nbsp;</span>
              ) : (
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >
                  Checkout
                </button>
              )}
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
        ) : (
          <div className="hungry">Empty Cart</div>
        )}
      </div>
    </div>
  );
}
