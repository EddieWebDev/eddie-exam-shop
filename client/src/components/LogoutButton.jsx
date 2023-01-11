import { useLogout } from "../queries/auth/hooks/useLogout";
import { StyledLogoutButton } from "../styles/styledButtons";

export const LogoutButton = () => {

    const { mutate, isLoading, isSuccess, isError, error} = useLogout();

    const handleLogout = () => {
        mutate()
    }

    return(
        <>
            <StyledLogoutButton onClick={()=> handleLogout()}>Logout</StyledLogoutButton>
            {isLoading && <div>Loading...</div>}
            {isError && <div>{error.message}</div>}
            {isSuccess && <div>Logged Out</div>}
        </>
    )
}