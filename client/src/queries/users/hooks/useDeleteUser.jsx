import { useMutation } from "@tanstack/react-query"
import { deleteUser } from "../Users"

export const useDeleteUser = () => {
    return useMutation(deleteUser)
}