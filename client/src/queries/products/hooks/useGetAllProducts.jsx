import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../Products";

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
  });
};
