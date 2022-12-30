import { useMutation } from "@tanstack/react-query"
import { updateUser } from "../Users"

export const useUpdateUser = () => {
    return useMutation(updateUser)
}