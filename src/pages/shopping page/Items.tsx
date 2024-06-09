import { useShoppingCart } from "../../context/shopContext";

interface Props {
  itemName: string;
  itemPrice: number;
  itemImage: string;
  itemId: number;
}
interface Data {
  data: Props;
}

const Items = ({ data }: Data) => {
  const { getItemQuantity, increaseCartQuantity } = useShoppingCart();
  const quantity = getItemQuantity(data.itemId);
  return (
    <div className="align-center py-4">
      <img src={data.itemImage} className="max-h-64 mx-auto" />
      <div className="text-center py-2.5">
        <p className="py-0.5">{data.itemName}</p>
        <p className="italic py-0.5">{data.itemPrice}$</p>
        <button
          onClick={() => increaseCartQuantity(data.itemId)}
          className="rounded-full bg-slate-900 text-white px-10 py-1.5 hover:bg-slate-950 focus:ring"
        >
          Add to cart {quantity !== 0 && <span>({quantity})</span>}
        </button>
      </div>
    </div>
  );
};

export default Items;
