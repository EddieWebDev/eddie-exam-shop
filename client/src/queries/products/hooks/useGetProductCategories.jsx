import { useQuery } from "@tanstack/react-query";
import { getProductCategories } from "../Products";

export const useGetProductCategories = () => {
  return useQuery({
    queryKey: ["product-categories"],
    queryFn: () => getProductCategories(),
  });
};