import { useContext } from "react";
import { LoginForm } from "./components/LoginForm";
import { LogoutButton } from "./components/LogoutButton";
import { UserContext } from "../../context/UserContext";
import { GoogleLogin } from "./components/googleLogin";
import { LoginContainer } from "../../styles/styledLogin";

const Login = () => {
  const { user } = useContext(UserContext);

  return (
    <section>
      <div>
        <h2>{user ? "Logout" : "Login"}</h2>
        <div>
          <LoginContainer>
            {user ? (
              <LogoutButton />
            ) : (
              <div>
                <LoginForm />
                <GoogleLogin />
              </div>
            )}
          </LoginContainer>
        </div>
      </div>
    </section>
  );
};

export default Login;
