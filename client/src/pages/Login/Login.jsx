import { useContext } from "react";
import { LoginForm } from "../../components/LoginForm";
import { LogoutButton } from "../../components/LogoutButton";
import { UserContext } from "../../context/UserContext";
import { GoogleLogin } from "./components/googleLogin";

const Login = () => {
  const { user } = useContext(UserContext);

  return (
    <section>
      <h1>{user ? "Log out" : "Log in"}</h1>
      <div>
        {user ? (
          <LogoutButton />
        ) : (
          <div>
            <LoginForm />
            <GoogleLogin />
          </div>
        )}
      </div>
    </section>
  );
};

export default Login;
