import { CreateOrderButton } from "../../components/createOrderButton";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const cart = useContext(CartContext);
  return (
    <>
      <div>Checkout</div>
      <div>
        {cart.items.map((item) => (
          <div key={item.id}>
            {item.productname}: ${item.price} x {item.qty} = $
            {item.price * item.qty}
          </div>
        ))}
        Total: ${cart.getCartTotal()}
      </div>
      <CreateOrderButton />
    </>
  );
};

export default Checkout;
