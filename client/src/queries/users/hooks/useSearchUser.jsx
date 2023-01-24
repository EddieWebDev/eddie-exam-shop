import { useQuery } from "@tanstack/react-query";
import { searchUser } from "../Users";

export const useSearchUser = (searchWord) => {
  return useQuery({
    queryKey: ["searched-user", searchWord],
    queryFn: () => searchUser(searchWord),
    enabled: !!searchWord,
  });
};
