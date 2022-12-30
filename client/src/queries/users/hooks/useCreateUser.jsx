import { useMutation } from "@tanstack/react-query"
import { createUser } from "../Users"

export const useCreateUser = () => {
    return useMutation(createUser)
}