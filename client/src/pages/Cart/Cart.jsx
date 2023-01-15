import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CreateOrderButton } from "../../components/createOrderButton"

const Cart = () => {
  const cart = useContext(CartContext);

  return (
    <>
      <h1>Cart</h1>
      <div>
        {cart.items.map((item) => (
          <div key={item.id}>
            {item.productname}: ${item.price} x {item.qty} = $
            {item.price * item.qty}
          </div>
        ))}
        Total: ${cart.getCartTotal()}
      </div>
      <CreateOrderButton/>
    </>
  );
};

export default Cart;
