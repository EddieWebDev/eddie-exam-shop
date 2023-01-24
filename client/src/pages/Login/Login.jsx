import { useContext } from "react";
import { LoginForm } from "./components/LoginForm";
import { LogoutButton } from "./components/LogoutButton";
import { UserContext } from "../../context/UserContext";
import { GoogleLogin } from "./components/googleLogin";
import { LoginContainer } from "../../styles/styledLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const { user } = useContext(UserContext);

  return (
    <section>
      <div>
        <h2>{user ? "Logout" : "Login"}</h2>
        <div className="text-center">
          <LoginContainer>
            {user ? (
              <LogoutButton />
            ) : (
              <div>
                <LoginForm />
                <GoogleLogin />
              </div>
            )}
            <Link to="/createaccount">
              <div>New user?</div>
            </Link>
          </LoginContainer>
        </div>
      </div>
    </section>
  );
};

export default Login;
