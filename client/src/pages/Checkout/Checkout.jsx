import { CreateOrder } from "../../components/createOrder";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const cart = useContext(CartContext);
  const total = cart.getCartTotal();

  return (
    <section>
      <div>
        <h3>Checkout</h3>
        <CreateOrder />
      </div>
    </section>
  );
};

export default Checkout;
