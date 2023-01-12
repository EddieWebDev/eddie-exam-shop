import { CreateProductForm } from "./createProductForm";
import { GetProductByIdForm } from "./getProductByIdForm";

export const ProductsAdmin = () => {
  return (
    <div>
      <div>productsAdmin</div>
      <CreateProductForm />
      <GetProductByIdForm />
    </div>
  );
};
