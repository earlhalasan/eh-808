import React, { useState, useEffect, useRef } from "react";
import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
import "./NewOrderPage.css";
import { Link, useNavigate } from "react-router-dom";
// import Logo from "../../components/Logo/Logo";
import MenuList from "../../components/MenuList/MenuList";
import CategoryList from "../../components/CategoryList/CategoryList";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import UserLogOut from "../../components/UserLogOut/UserLogOut";

export default function NewOrderPage({ user, setUser }) {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const [cart, setCart] = useState(null);
  // Obtain a ref object
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  // useEffect(function() {
  //   console.log('NewOrderPage rendered');
  // });

  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setActiveCat(categoriesRef.current[1]);
      setMenuItems(items);
    }
    getItems();

    // Load the user's cart (the unpaid order for that user)
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);
  // the empty dependency array above will result in
  // the function running after the FIRST render
  // only

  /*--- Event Handlers ---*/

  async function handleAddToOrder(itemId) {
    // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    // 2. Update the cart state with the updated cart received from the server
    setCart(updatedCart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate("/orders");
  }

  return (
    <main className="NewOrderPage pt-[4.3rem] overflow-auto w-screen h-screen">
      <aside className="border-[1px] mx-3 rounded-lg bg-white mb-3">
        {/* <Logo /> */}
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <div className="bg-white">
          <Link to="/orders" className="button btn-sm bg-white">
            Order History
          </Link>
        </div>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <div className="overflow-auto">
        <MenuList
          menuItems={menuItems.filter(
            (item) => item.category.name === activeCat
          )}
          handleAddToOrder={handleAddToOrder}
        />
      </div>
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>
  );
}
