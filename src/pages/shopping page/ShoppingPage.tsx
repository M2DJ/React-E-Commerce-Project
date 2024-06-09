import { PRODUCTS } from "../../products";
import Items from "./Items";

const ShoppingPage = () => {
  return (
    <>
      <h1 className="text-center py-10 text-6xl">
        <b>My Shop</b>
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-10 py-10">
        {PRODUCTS.map((p) => (
          <Items data={p} />
        ))}
      </div>
    </>
  );
};

export default ShoppingPage;
