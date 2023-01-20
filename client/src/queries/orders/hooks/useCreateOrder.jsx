import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "../Orders";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const useCreateOrder = () => {
  const { emptyCart } = useContext(CartContext);
  const queryClient = useQueryClient();

  return useMutation(createOrder, {
    onSuccess: () => {
      emptyCart();
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      queryClient.invalidateQueries({ queryKey: ["user-orders"] });
      queryClient.invalidateQueries({ queryKey: ["user-by-id"] });
    },
  });
};
