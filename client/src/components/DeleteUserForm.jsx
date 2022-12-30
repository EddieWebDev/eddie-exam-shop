import { useForm } from 'react-hook-form'
import { useDeleteUser } from '../queries/users/hooks/useDeleteUser';

export const DeleteUserForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const {mutate} = useDeleteUser()

    const handleDeleteUser = (userId) => {
        const {id} = userId
        mutate(id)
    }

    return(
        <>
            <div>DELETE USER</div>
            <form onSubmit={handleSubmit((userId) => handleDeleteUser(userId))}>
                <input {...register("id", {required: 'This is required'})} placeholder="Id of user to delete" />
                <p>{errors.id?.message}</p>
                <input type="submit" />
            </form>
        </>
    )
}