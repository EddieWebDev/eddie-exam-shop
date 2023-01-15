import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const cart = useContext(CartContext);

  return (
    <>
      <h1>Cart</h1>
      <div>
        {cart.items.map((item) => (
          <div>
            {item.productname}: ${item.price} x {item.qty} = $
            {item.price * item.qty}
          </div>
        ))}
        Total: ${cart.getCartTotal()}
      </div>
    </>
  );
};

export default Cart;
