import { useGetUserOrders } from "../../../../queries/orders/hooks/useGetUserOrders";
import {
  AdminTable,
  TableTheadTr,
  TableTheadTd,
  TableTbodyTr,
  TableTbodyTd,
  TableTbodyTotalTr,
} from "../../../../styles/styledTable";

export const SearchedUserOrders = ({ id }) => {
  const {
    data: orders,
    isInitialLoading,
    isError,
    error,
  } = useGetUserOrders(id);

  if (isInitialLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center">{error.message}</div>;
  }
  return (
    <div>
      <div className="w-full text-center text-white bg-primary-green">
        <h5>User orders</h5>
      </div>
      <div className="flex flex-col px-2 justify-center">
        {orders &&
          orders.map((order) => (
            <AdminTable key={order[0].order_id}>
              <thead>
                <TableTheadTr>
                  <TableTheadTd>
                    <b>#{order[0].order_id}</b>
                  </TableTheadTd>
                  <TableTheadTd>Product id</TableTheadTd>
                  <TableTheadTd>Product name</TableTheadTd>
                  <TableTheadTd>Quantity ordered</TableTheadTd>
                  <TableTheadTd>Product total</TableTheadTd>
                </TableTheadTr>
              </thead>
              <tbody>
                {order.map((product) => (
                  <TableTbodyTr key={product.product_id}>
                    <TableTbodyTd />
                    <TableTbodyTd>{product.product_id}</TableTbodyTd>
                    <TableTbodyTd>{product.product_name}</TableTbodyTd>
                    <TableTbodyTd>{product.product_qty}</TableTbodyTd>
                    <TableTbodyTd>
                      ${product.product_price * product.product_qty}
                    </TableTbodyTd>
                  </TableTbodyTr>
                ))}
                <TableTbodyTotalTr>
                  <TableTbodyTd />
                  <TableTbodyTd>Status:</TableTbodyTd>
                  <TableTbodyTd>{order[0].status}</TableTbodyTd>
                  <TableTbodyTd>Total:</TableTbodyTd>
                  <TableTbodyTd>${order[0].total}</TableTbodyTd>
                </TableTbodyTotalTr>
              </tbody>
            </AdminTable>
          ))}
      </div>
    </div>
  );
};
