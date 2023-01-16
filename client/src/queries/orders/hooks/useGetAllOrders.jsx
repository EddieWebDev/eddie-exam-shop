import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "../Orders";

export const useGetAllOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => getAllOrders(),
  });
};
