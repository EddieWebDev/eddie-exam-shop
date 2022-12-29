import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../../queries/users/getUsers";

function Login() {
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
            <h1>Login</h1>
        </section>
    )
}

export default Login


/* import {useState} from "react"
import Axios from "axios"
import { CreateUserContainer, CreateUserForm } from "../styles/styledCreateUser"

function Login() {
    
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [accounts, setAccounts] = useState([])
    
    const accountList = accounts.map(account => <li key={account.id}>
        <b>Firstname:</b> {account.firstname}
        <b>Lastname:</b> {account.lastname}
        <b>Username:</b> {account.username}
        <b>Password:</b> {account.password}
        </li>
        )
    
    let handleSubmit = async (e) => {
        e.preventDefault()
        
        Axios.post("/login", {
            firstname: firstname,
            lastname: lastname,
            username: username,
            password: password,
        })
        .then((response) => {
            console.log(response.status);
            if(response.status === 200) {
                setFirstname("")
                setLastname("")
                setUsername("")
                setPassword("")
            }
        })
        .catch((error) => {
            console.log(error)
        });
    }

    let handleAccounts = async (e) => {
        e.preventDefault()
        console.log("click")
        Axios.get("/login").then((response) => {
            setAccounts(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    let clearAccounts = (e) => {
        e.preventDefault()
        setAccounts([])
    }

   
    


    return(
        <section>
            <h1>Login</h1>
            <CreateUserContainer>
            <h2>Create new user</h2>
                <CreateUserForm onSubmit={handleSubmit}>
                    <input type="text" value={firstname} placeholder="firstname" onChange={(e) => setFirstname(e.target.value)}/>
                    <input type="text" value={lastname} placeholder="lastname" onChange={(e) => setLastname(e.target.value)}/>
                    <input type="text" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                    <input type="text" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">Create user</button>
                </CreateUserForm>
            </CreateUserContainer>
            <button onClick={handleAccounts}>
                Accounts
            </button>
            <button onClick={clearAccounts}>
                Clear Accounts
            </button>
            <ul>
                {
                    accountList
                }
            </ul>
        </section>
    )
}

export default Login */