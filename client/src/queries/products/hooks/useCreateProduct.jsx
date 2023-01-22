import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../Products";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(createProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["product-by-id"] });
      queryClient.invalidateQueries({ queryKey: ["searched-product"] });
      queryClient.invalidateQueries({ queryKey: ["products-by-category"] });
    },
  });
};
