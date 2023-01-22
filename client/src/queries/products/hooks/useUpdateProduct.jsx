import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "../Products";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(updateProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["product-by-id"] });
      queryClient.invalidateQueries({ queryKey: ["searched-product"] });
      queryClient.invalidateQueries({ queryKey: ["products-by-category"] });
    },
  });
};
