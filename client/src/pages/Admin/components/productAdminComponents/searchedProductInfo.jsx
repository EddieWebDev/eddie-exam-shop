import { useGetProductById } from "../../../../queries/products/hooks/useGetProductById";
import {
  AdminTable,
  TableTheadTr,
  TableTheadTd,
  TableTbodyTr,
  TableTbodyTd,
} from "../../../../styles/styledTable";

export const SearchedProductInfo = ({ id }) => {
  const { data, isInitialLoading, isError, error } = useGetProductById(id);

  if (isInitialLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full text-center text-white bg-primary-green">
        <h5>Product info</h5>
      </div>
      <div className="flex max-w-full">
        <div className="flex flex-col items-center">
          {data && (
            <>
              <AdminTable>
                <thead>
                  <TableTheadTr>
                    <TableTheadTd>Id</TableTheadTd>
                    <TableTheadTd>{data.id}</TableTheadTd>
                  </TableTheadTr>
                </thead>
                <tbody>
                  <TableTbodyTr>
                    <TableTbodyTd className="w-1/2">Name</TableTbodyTd>
                    <TableTbodyTd>{data.productname}</TableTbodyTd>
                  </TableTbodyTr>
                  <TableTbodyTr>
                    <TableTbodyTd>Category</TableTbodyTd>
                    <TableTbodyTd>{data.category}</TableTbodyTd>
                  </TableTbodyTr>
                  <TableTbodyTr>
                    <TableTbodyTd>Price</TableTbodyTd>
                    <TableTbodyTd>${data.price}</TableTbodyTd>
                  </TableTbodyTr>
                  <TableTbodyTr>
                    <TableTbodyTd>Stock</TableTbodyTd>
                    <TableTbodyTd>{data.stock}</TableTbodyTd>
                  </TableTbodyTr>
                </tbody>
              </AdminTable>
              <div>
                <b>Description</b>
              </div>
              <div className="p-4 max-w-full">
                <p className="break-normal overflow-auto">{data.description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
