import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../Products";

export const useCreateProduct = (newProduct) => {
  const queryClient = useQueryClient();

  return useMutation(createProduct,{
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    }},
  );
};
