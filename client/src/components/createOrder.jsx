import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { useCreateOrder } from "../queries/orders/hooks/useCreateOrder";
import { Link } from "react-router-dom";
import { Button } from "../styles/styledButtons";
import { CheckoutCompleteTable } from "../pages/Checkout/components/checkoutCompleteTable";
import { CartTable } from "./cartTable";

export const CreateOrder = () => {
  const cart = useContext(CartContext);
  const { user } = useContext(UserContext);
  const cartTotal = cart.getCartTotal();

  const { mutate, isError, error, isLoading, data } = useCreateOrder();

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
    return (
      <div className="mt-6">
        <h5>Order complete!</h5>
        <CheckoutCompleteTable newOrder={newOrder} />
        <div className="flex gap-4">
          <Link to="/categories">
            <Button>More shopping!</Button>
          </Link>
          <Link to={`/user/${user.id}`}>
            <Button>Go to your profile</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {cartTotal < 1 ? (
        <div>No items</div>
      ) : (
        <div>
          <CartTable />
          <div className="my-2">
            <b>Total:</b> ${cart.getCartTotal()}
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => {
                handleCreateOrder();
              }}
            >
              Create Order
            </Button>
            <div>
              {isLoading && <div>Loading...</div>}
              {isError && <div>{error?.message}</div>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
