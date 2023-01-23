import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import {
  Table,
  TableTheadTr,
  TableTheadTd,
  TableTbodyTr,
  TableTbodyTd,
} from "../../../styles/styledTable";
import { TableButton } from "../../../styles/styledButtons";

export const CartTable = () => {
  const { items, addOneToCart, removeOneFromCart } = useContext(CartContext);

  return (
    <Table>
      <thead>
        <TableTheadTr>
          <TableTheadTd>Product</TableTheadTd>
          <TableTheadTd>Price</TableTheadTd>
          <TableTheadTd>Quantity</TableTheadTd>
          <TableTheadTd />
        </TableTheadTr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TableTbodyTr key={item.id}>
            <TableTbodyTd>{item.productname}</TableTbodyTd>
            <TableTbodyTd>${item.price}</TableTbodyTd>
            <TableTbodyTd>{item.qty}</TableTbodyTd>
            <TableTbodyTd className="flex gap-2 justify-center">
              <TableButton
                onClick={() =>
                  addOneToCart(
                    item.id,
                    item.productname,
                    item.price,
                    item.stock
                  )
                }
              >
                +
              </TableButton>
              <TableButton onClick={() => removeOneFromCart(item.id)}>
                -
              </TableButton>
            </TableTbodyTd>
          </TableTbodyTr>
        ))}
      </tbody>
    </Table>
  );
};
