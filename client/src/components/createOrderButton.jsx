import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { useCreateOrder } from "../queries/orders/hooks/useCreateOrder";
import { Link } from "react-router-dom";

export const CreateOrderButton = () => {
  const cart = useContext(CartContext);
  const { user } = useContext(UserContext);
  const cartTotal = cart.getCartTotal();

  const { mutate, isSuccess, isLoading, data } = useCreateOrder();

  const handleCreateOrder = () => {
    mutate({ id: user.id, cart: cart.items, total: cartTotal });
  };

  if (!user) {
    return (
      <div>
        <Link to="/login">
          <h3>Log in to place an order</h3>
        </Link>
      </div>
    );
  }

  if (data) {
    const newOrder = data.data;
    console.log(newOrder);
    return (
      <div>
        <h3>ORDER COMPLETE</h3>
        <h5>Your order number is {newOrder[0].order_id}</h5>
        <div>
          {newOrder.map((item, i) => (
            <div key={i}>
              Product: {item.product_name} x {item.product_qty}
            </div>
          ))}
        </div>
        <div>Order total: ${newOrder[0].total}</div>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => {
          handleCreateOrder();
        }}
      >
        Create Order
      </button>
      <div>
        {isLoading && <div>Loading...</div>}
        {isSuccess && <div>Success...</div>}
      </div>
    </div>
  );
};
