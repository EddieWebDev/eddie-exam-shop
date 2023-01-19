import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../Users";

export const useGetUserById = (id) => {
  return useQuery({
    queryKey: ["user-by-id", id],
    queryFn: () => getUserById(id),
    enabled: !!id,
  });
};
