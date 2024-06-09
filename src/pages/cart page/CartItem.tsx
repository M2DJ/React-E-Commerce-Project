import { useShoppingCart } from "../../context/shopContext";
import { PRODUCTS } from "../../products";

type CartItemProps = {
    id: number;
    quantity: number;
}


const CartItem = ({id, quantity}: CartItemProps) => {
    const {updateCartItemCount, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();
    const item = PRODUCTS.find(item => item.itemId === id);
    if(item === null) return null;
    return (
    <>
        <div className="flex sm:w-4/5 md:lg:w-2/4 mx-auto py-4">
            <img className="h-34 w-36 mx-2" src={item?.itemImage} />
            <div className="mx-14 py-1">
                <p className="pb-2">{item?.itemName}</p>
                <p className="italic ">{item?.itemPrice}$<span className="mx-0.5">({item?.itemPrice && item?.itemPrice * quantity}$)</span></p>
                <div>
                    <button onClick={() => increaseCartQuantity(id)} className="rounded-none bg-slate-900 text-white px-2 py-1 hover:bg-slate-950 focus:ring">+</button>
                    <input onChange={(e) => updateCartItemCount(Number(e.target.value), id) } className=" bg-slate-400 text-center px-2 py-1" value={quantity} />
                    <button onClick={() => decreaseCartQuantity(id)} className="rounded-none bg-slate-900 text-white px-2.5 py-1 hover:bg-slate-950 focus:ring">-</button>
                </div>
            </div>
            <button onClick={() => removeFromCart(id)} className="rounded bg-red-700 text-white px-5 my-16 hover:bg-slate-950 focus:ring">X</button>
        </div>
    </>
  )
}

export default CartItem