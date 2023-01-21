import React from "react";
import { DeleteButton } from "../../../../styles/styledButtons";
import { useDeleteProduct } from "../../../../queries/products/hooks/useDeleteProduct";

export const DeleteProductButton = ({ id, setSearchedProductId }) => {
  const { mutate, isLoading, isError, error } = useDeleteProduct();

  const handleDeleteProduct = (id) => {
    mutate(id);
    setSearchedProductId(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <DeleteButton className="mt-4" onClick={() => handleDeleteProduct(id)}>
        Delete product
      </DeleteButton>
    </div>
  );
};
