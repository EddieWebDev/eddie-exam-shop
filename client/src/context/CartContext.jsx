import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  getProductQty: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  removeProductFromCart: () => {},
  getCartTotal: () => {},
  emptyCart: () => {},
  totalQtyCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  // Get quantity
  const getProductQty = (id) => {
    const qty = cartProducts.find((product) => product.id === id)?.qty;

    if (!qty) {
      return 0;
    }

    return qty;
  };

  // Add one to cart
  const addOneToCart = (id, productname, price, stock) => {
    const qty = getProductQty(id);

    if (qty < stock) {
      if (!qty) {
        setCartProducts([
          ...cartProducts,
          { id, productname, price, qty: 1, stock },
        ]);
      } else {
        setCartProducts(
          cartProducts.map((product) =>
            product.id === id ? { ...product, qty: product.qty + 1 } : product
          )
        );
      }
    } else return;
  };

  // Remove one from cart
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

  // Remove product from cart
  const removeProductFromCart = (id) => {
    setCartProducts(cartProducts.filter((product) => product.id !== id));
  };

  // Get cart total
  const getCartTotal = () => {
    let cartTotal = 0;

    cartProducts.map((product) => {
      return (cartTotal += product.price * product.qty);
    });

    return cartTotal;
  };

  // Empty cart
  const emptyCart = () => {
    setCartProducts([]);
  };

  // Number of products in cart
  const totalQtyCart = () => {
    const total = cartProducts.reduce((sum, product) => sum + product.qty, 0);
    return total;
  };

  const contextValue = {
    items: cartProducts,
    getProductQty,
    addOneToCart,
    removeOneFromCart,
    removeProductFromCart,
    getCartTotal,
    emptyCart,
    totalQtyCart,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
