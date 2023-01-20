import {
  Table,
  TableTheadTr,
  TableTheadTd,
  TableTbodyTr,
  TableTbodyTd,
  TableTbodyTotalTr,
} from "../../../styles/styledTable";

export const CheckoutCompleteTable = ({ newOrder }) => {
  return (
    <Table>
      <thead>
        <TableTheadTr>
          <TableTheadTd>
            <b>#{newOrder[0].order_id}</b>
          </TableTheadTd>
          <TableTheadTd>Product id</TableTheadTd>
          <TableTheadTd>Product name</TableTheadTd>
          <TableTheadTd>Quantity ordered</TableTheadTd>
          <TableTheadTd>Product total</TableTheadTd>
        </TableTheadTr>
      </thead>
      <tbody>
        {newOrder.map((product) => (
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
          <TableTbodyTd>{newOrder[0].status}</TableTbodyTd>
          <TableTbodyTd>Total:</TableTbodyTd>
          <TableTbodyTd>${newOrder[0].total}</TableTbodyTd>
        </TableTbodyTotalTr>
      </tbody>
    </Table>
  );
};
