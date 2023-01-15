import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CreateOrderButton = () => {
  const cart = useContext(CartContext);

  const handleCreateOrder = (cart) => {
    console.log(cart.items)
    const cartArray = cart.items.map(item => Object.values(item))
    const order_id = 1
    const test = cartArray.map(item => [order_id, ...item])
    console.log(cartArray)
    console.log(test)
  }

  return <div><button onClick={() => {handleCreateOrder(cart)}}>Create Order</button></div>;
};
