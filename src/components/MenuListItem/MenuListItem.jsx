// import "./MenuListItem.css";

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className="bg-[#fcbf49] rounded-xl mb-2 p-3">
      <div className="emoji">{menuItem.emoji}</div>

      <div className="name">{menuItem.name}</div>
      <img src={menuItem.picture} alt={menuItem.name} />
      <span>${menuItem.price.toFixed(2)}</span>
      <div className="">
        <span className="font-bold">Description:</span>
        <br />
        {menuItem.description}
      </div>
      <div className="">
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
