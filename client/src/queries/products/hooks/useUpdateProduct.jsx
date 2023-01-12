import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "../Products";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(updateProduct,{
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    }},
  );
};
