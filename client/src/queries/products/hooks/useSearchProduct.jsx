import { useQuery } from "@tanstack/react-query";
import { searchProduct } from "../Products";

export const useSearchProduct = (searchWord) => {
  return useQuery({
    queryKey: ["searched-product", searchWord],
    queryFn: () => searchProduct(searchWord),
    enabled: !!searchWord,
  });
};
