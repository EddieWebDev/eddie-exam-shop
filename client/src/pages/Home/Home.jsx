import { useGetAllUsers } from "../../queries/users/hooks/useGetAllUsers";

function Home() {
    const {data, isError, error, isLoading} = useGetAllUsers();
    if(isLoading) {
       return <div>Loading</div>
    }
    if(isError) {
        return <div>{error.message} {error.response.data}</div>
    }
    return(
        <section>
            <ul>
            {data?.map(user => <li key={user.id}>Id:{user.id} Email:{user.email}</li>)}
            </ul>
            <h1>Home</h1>
        </section>
    )
}

export default Home