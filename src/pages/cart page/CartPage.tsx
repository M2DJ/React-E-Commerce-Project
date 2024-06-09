import { useState } from "react";
import { useShoppingCart } from "../../context/shopContext";
import { PRODUCTS } from "../../products";
import CartItem from "./CartItem";

const CartPage = () => {
  const { cartQuantity, cartItem } = useShoppingCart();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevClick) => !prevClick);
  };

  return (
    <>
      <div className="static">
        <h1 className="text-5xl text-center py-10">Cart</h1>
        {cartQuantity === 0 && (
          <p className="text-6xl text-center text-red text-red-600 py-16">
            <b>
              This cart <span className="block">is empty</span>
            </b>
          </p>
        )}
        <div>
          {cartItem.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <p className="text-2xl px-10 pt-14">
          <b>
            Total:
            {cartQuantity === 0
              ? 0
              : cartItem.reduce((total, cartItems) => {
                  const item = PRODUCTS.find(
                    (item) => item.itemId === cartItems.id
                  );
                  return total + (item?.itemPrice || 0) * cartItems.quantity;
                }, 0)}
            $
          </b>
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => {
              handleClick();
              setTimeout(function(){
                location.reload();
              }, 600);
            }}
            className="my-9 text-center text-2xl rounded-full bg-slate-900 text-white px-10 py-3 hover:bg-slate-950 focus:ring"
          >
            Check Out
          </button>
        </div>
        {clicked && (
          <p className="sm:sticky text-2xl lg:text-6xl text-center absolute lg:inset-x-auto left-40 bottom-32 bg-slate-900 text-white py-32 px-32 lg:w-full">
            <b>Thank You!</b>
          </p>
        )}
      </div>
    </>
  );
};

export default CartPage;
