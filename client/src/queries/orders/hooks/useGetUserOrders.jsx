import { useQuery } from "@tanstack/react-query";
import { getUserOrders } from "../Orders";

export const useGetUserOrders = (id) => {
  return useQuery({
    queryKey: ["user-orders", id],
    queryFn: () => getUserOrders(id),
    enabled: !!id,
  });
};
