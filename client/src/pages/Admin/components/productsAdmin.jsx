import { CreateProductForm } from "./productAdminComponents/createProductForm";
import { SearchProductForm } from "./productAdminComponents/searchProductForm";
import { UpdateProductForm } from "./productAdminComponents/updateProductForm";
import { AdminContainer } from "../../../styles/styledAdmin";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { SearchedProductInfo } from "./productAdminComponents/searchedProductInfo";

export const ProductsAdmin = () => {
  const [searchedProductId, setSearchedProductId] = useState(null);

  const queryClient = useQueryClient();

  const handleSearchClick = async (id) => {
    await queryClient.invalidateQueries({ queryKey: ["searched-product"] });
    await queryClient.invalidateQueries({ queryKey: ["product-by-id"] });
    setSearchedProductId(id);
  };

  return (
    <div className="flex flex-wrap gap-8">
      <AdminContainer>
        <CreateProductForm />
      </AdminContainer>
      <AdminContainer>
        <SearchProductForm handleSearchClick={handleSearchClick} />
      </AdminContainer>
      <AdminContainer>
        <UpdateProductForm
          id={searchedProductId}
          setSearchedProductId={setSearchedProductId}
        />
      </AdminContainer>
      <AdminContainer>
        <SearchedProductInfo id={searchedProductId} />
      </AdminContainer>
    </div>
  );
};
