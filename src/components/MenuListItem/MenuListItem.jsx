// import "./MenuListItem.css";

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className="bg-[#fcbf49] rounded-xl mb-2">
      <div className="emoji">{menuItem.emoji}</div>
      <img src="{menuItem.picture}" alt={menuItem.name} />
      <div className="name">{menuItem.name}</div>
      <div className="buy">
        <span>${menuItem.price.toFixed(2)}</span>
        <button
          className="btn-sm"
          onClick={() => handleAddToOrder(menuItem._id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
