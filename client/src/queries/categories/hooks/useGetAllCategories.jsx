import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../Categories";

export const useGetAllCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });
};
