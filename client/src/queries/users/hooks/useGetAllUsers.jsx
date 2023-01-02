import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../Users";

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
  });
};
