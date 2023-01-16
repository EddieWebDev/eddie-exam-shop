import { useQuery } from "@tanstack/react-query";
import { getOrderById } from "../Orders";

export const useGetOrderById = (id) => {
  return useQuery({
    queryKey: ["order-by-id", id],
    queryFn: () => getOrderById(id),
    enabled: !!id,
  });
};
