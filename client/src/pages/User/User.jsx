import { useParams } from "react-router-dom";
import { useGetUserById } from "../../queries/users/hooks/useGetUserById";
import { useGetUserOrders } from "../../queries/orders/hooks/useGetUserOrders";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { LogoutButton } from "../Login/components/LogoutButton";
import { UserDetailsTable } from "./components/userDetailsTable";
import { UserOrdersTable } from "./components/userOrdersTable";

function Product() {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const {
    data: userData,
    isLoading: userLoading,
    isError: isUserError,
    error: userError,
  } = useGetUserById(id);
  const {
    data: ordersData,
    isLoading: ordersLoading,
    isError: isOrdersError,
    error: ordersError,
  } = useGetUserOrders(id);

  if (!user || (user.id !== parseInt(id) && user.role !== "admin")) {
    return <div>401 Authorization denied</div>;
  }

  if (userLoading || ordersLoading) {
    return <div>Loading...</div>;
  }

  if (isUserError || isOrdersError) {
    return (
      <>
        <div>{userError?.message}</div>
        <div>{ordersError?.message}</div>
      </>
    );
  }

  return (
    <section className="m-4 flex flex-wrap gap-8">
      <div>
        <h3>User</h3>
        <div>
          {userData && <UserDetailsTable userData={userData} />}
          {user.id === parseInt(id) && <LogoutButton />}
        </div>
      </div>
      <div>
        <h3>Orders</h3>
        <div>{ordersData && <UserOrdersTable ordersData={ordersData} />}</div>
      </div>
    </section>
  );
}

export default Product;
