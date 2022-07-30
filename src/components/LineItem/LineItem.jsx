// import './LineItem.css';

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  return (
    <div className="LineItem pb-5">
      {/* <div className="flex-ctr-ctr">{lineItem.item.emoji}</div> */}
      <div className="flex justify-between">
        <div className="">
          <span className="font-semibold ">
            {lineItem.item.name} &nbsp; {lineItem.item.emoji}
          </span>
          {/* <span>{lineItem.item.price.toFixed(2)}</span> */}
        </div>
        <div className="ext-price">${lineItem.extPrice.toFixed(2)}</div>
      </div>
      <div
        className="text-right"
        style={{ justifyContent: isPaid && "center" }}
      >
        {!isPaid && (
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
          >
            −
          </button>
        )}
        <span>{lineItem.qty}</span>
        {!isPaid && (
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
          >
            +
          </button>
        )}
      </div>
    </div>
  );
}
