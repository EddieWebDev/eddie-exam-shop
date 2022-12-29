import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../../queries/users/getUsers";

function Home() {
    const {data, isError, error, isLoading} = useQuery(['users'], () => getUsers());
    if(isLoading) {
       return <div>Loading</div>
    }
    if(isError) {
        return <div>{error.message}</div>
    }
    return(
        <section>
            {data?.map(user => <p key={user.id}>{user.id}</p>)}
            <h1>Home</h1>
        </section>
    )
}

export default Home