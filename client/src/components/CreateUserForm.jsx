import { useForm } from 'react-hook-form'
import { useCreateUser } from '../queries/users/hooks/useCreateUser';

export const CreateUserForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const {mutate} = useCreateUser()

    const handleCreateUser = (newUser) => {
        mutate(newUser)
    }

    return(
        <>
            <div>CREATE USER</div>
            <form onSubmit={handleSubmit((newUser) => handleCreateUser(newUser))}>
                <input {...register("firstname", {required: 'This is required', minLength: {value: 4, message: 'Min length 4'}})} placeholder="First Name" />
                <p>{errors.firstname?.message}</p>
                <input {...register("lastname", {required: 'This is required', minLength: {value: 4, message: 'Min length 4'}})} placeholder="Last Name" />
                <p>{errors.lastname?.message}</p>
                <input {...register("username", {required: 'This is required', minLength: {value: 4, message: 'Min length 4'}})} placeholder="User Name" />
                <p>{errors.username?.message}</p>
                <input {...register("password", {required: 'This is required', minLength: {value: 4, message: 'Min length 4'}})} placeholder="Password" />
                <p>{errors.password?.message}</p>
                <input type="submit" />
            </form>
        </>
    )
}