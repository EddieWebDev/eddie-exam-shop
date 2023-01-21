import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../Products";

export const useGetProductById = (id) => {
  return useQuery({
    queryKey: ["product-by-id", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });
};
