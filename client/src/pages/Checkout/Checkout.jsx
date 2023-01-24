import { CreateOrder } from "./components/createOrder";

const Checkout = () => {
  return (
    <section>
      <div className="flex flex-col gap-4">
        <h2>Checkout</h2>
        <CreateOrder />
      </div>
    </section>
  );
};

export default Checkout;
