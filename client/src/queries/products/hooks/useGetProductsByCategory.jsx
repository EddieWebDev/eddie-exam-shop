import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../Products";

export const useGetProductsByCategory = (category) => {
  return useQuery({
    queryKey: ["products-by-category", category],
    queryFn: () => getProductsByCategory(category),
    enabled: !!category,
  });
};
