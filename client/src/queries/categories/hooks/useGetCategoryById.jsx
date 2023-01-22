import { useQuery } from "@tanstack/react-query";
import { getCategoryById } from "../Categories";

export const useGetCategoryById = (id) => {
  return useQuery({
    queryKey: ["category-by-id", id],
    queryFn: () => getCategoryById(id),
    enabled: !!id,
  });
};
