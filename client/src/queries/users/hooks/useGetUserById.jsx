import { useQuery } from "@tanstack/react-query"
import { getUserById } from "../Users"

export const useGetUserById = (id) => {
    return useQuery(['user-by-id', id], () => getUserById(id))
}