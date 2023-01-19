import { CreateProductForm } from "./productAdminComponents/createProductForm";
import { GetProductByIdForm } from "./productAdminComponents/getProductByIdForm";
import { useGetAllProducts} from "./../../../queries/products/hooks/useGetAllProducts"

export const ProductsAdmin = () => {
  const { data, isError, error, isLoading } = useGetAllProducts();

  return (
    <div>
      <div className="flex">
        <div className="w-1/3">
          <CreateProductForm />
          <GetProductByIdForm />
        </div>
        <div>
          <h1>Products</h1>
          {isLoading && <div>Loading...</div>}
          {isError && <div>{error.message}</div>}
          <ul>
            {data?.map((product) => (
              <li key={product.id}>
                Id:{product.id} Name:{product.productname} Price:{product.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
