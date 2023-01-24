import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartTable } from "./components/cartTable";
import { Link } from "react-router-dom";
import { Button } from "../../styles/styledButtons";

const Cart = () => {
  const cart = useContext(CartContext);
  const total = cart.getCartTotal();

  return (
    <section>
      <div>
        <h2>Cart</h2>
        {total < 1 ? (
          <Link to="/categories">
            <div className="my-4 text-2xl">Your cart is empty!</div>
          </Link>
        ) : (
          <div>
            <CartTable />
            <div className="my-2">
              <b>Total:</b> ${cart.getCartTotal()}
            </div>
            <div className="flex gap-4">
              <Link to="/checkout">
                <Button>Checkout</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
