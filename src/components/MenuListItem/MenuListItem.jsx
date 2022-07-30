import "./MenuListItem.css";

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
<<<<<<< HEAD
    <div className="MenuListItem rounded-lg mb-5">
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
              className="btn-sm"
              onClick={() => handleAddToOrder(menuItem._id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
=======
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
>>>>>>> b5aa76cf8de4f444f760d38cc7b60e3ce6a0d743
      </div>
    </div>
  );
}
