import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct} from "../Products";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteProduct,{
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    }},
  );
};
