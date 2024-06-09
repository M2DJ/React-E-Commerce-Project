import { ReactNode, createContext, useContext, useState } from "react";

type ShoppingCartProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  updateCartItemCount: (newAmount: number, id: number) => void;
  cartQuantity: number;
  cartItem: CartItem[];
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

type CartItem = {
  id: number;
  quantity: number;
};

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

const ShoppingCartProvider = ({ children }: ShoppingCartProps) => {
  const [cartItem, setCartItems] = useState<CartItem[]>([]);

  const getItemQuantity = (id: number) => {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    setCartItems((curItems) => {
      if (curItems.find((item) => item.id === id) == null) {
        return [...curItems, { id, quantity: 1 }];
      } else {
        return curItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((curItems) => {
      if (curItems.find((item) => item.id === id)?.quantity === 1) {
        return curItems.filter((item) => item.id != id);
      } else {
        return curItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((curItems) => {
      return curItems.filter((item) => item.id !== id);
    });
  };

  const cartQuantity = cartItem.reduce((quantity, item) => item.quantity + quantity, 0);

  const updateCartItemCount = (newAmount: number, id: number) => {
    setCartItems(curItems => {
      return curItems.map(item => {
        if(item.id === id){
          return { ...item, quantity: newAmount}
        }else{
          return item
        }
      })
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        updateCartItemCount,
        cartItem,
        cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
