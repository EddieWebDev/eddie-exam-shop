import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../Products";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["product-by-id"] });
      queryClient.invalidateQueries({ queryKey: ["searched-product"] });
      queryClient.invalidateQueries({ queryKey: ["products-by-category"] });
    },
  });
};
