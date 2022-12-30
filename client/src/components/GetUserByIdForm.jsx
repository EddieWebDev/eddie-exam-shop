import { useForm } from 'react-hook-form'
import { useGetUserById } from '../queries/users/hooks/useGetUserById';
import { useState } from 'react';

export const GetUserByIdForm = () => {
    const [searchId, setSearchId] = useState("1")
    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        defaultValues: {
            id: ""
        }
    });
    const {data, isLoading, isError, error} = useGetUserById(searchId);
    
    const handleGetUserById = (userId) => {
        let {id} = userId
        setSearchId(id)
        reset()
    }

    if(isLoading) {
        return <div>Loading</div>
     }
     if(isError) {
         return <div>{error.message}</div>
     }

    return(
        <>
            <div>GET USER BY ID</div>
            <form onSubmit={handleSubmit((userId) => handleGetUserById(userId))}>
                <input {...register("id", {required: 'This is required'})} placeholder="Id of user to get" />
                <p>{errors.id?.message}</p>
                <input type="submit" />
            </form>
            {data.length === 0 ? <div>No user with that id</div> : <div>Name:{data[0]?.firstname} Id:{data[0]?.id}</div>}
        </>
    )
}