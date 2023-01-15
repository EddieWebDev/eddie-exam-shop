import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  getProductQty: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  removeProductFromCart: () => {},
  getCartTotal: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const getProductQty = (id) => {
    const qty = cartProducts.find((product) => product.id === id)?.qty;

    if (!qty) {
      return 0;
    }

    return qty;
  };

  const addOneToCart = (id, productname, price) => {
    const qty = getProductQty(id);

    if (!qty) {
      setCartProducts([...cartProducts, { id, productname, price, qty: 1 }]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id ? { ...product, qty: product.qty + 1 } : product
        )
      );
    }
  };

  const removeOneFromCart = (id) => {
    const qty = getProductQty(id);

    if (qty === 1) {
      removeProductFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id ? { ...product, qty: product.qty - 1 } : product
        )
      );
    }
  };

  const removeProductFromCart = (id) => {
    setCartProducts(cartProducts.filter((product) => product.id !== id));
  };

  const getCartTotal = () => {
    let cartTotal = 0;

    cartProducts.map((product) => {
      cartTotal += product.price * product.qty;
    });

    console.log(cartTotal);

    return cartTotal;
  };

  const contextValue = {
    items: cartProducts,
    getProductQty,
    addOneToCart,
    removeOneFromCart,
    removeProductFromCart,
    getCartTotal,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
