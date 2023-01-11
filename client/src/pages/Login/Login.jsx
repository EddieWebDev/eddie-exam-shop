import { useContext } from "react";
import { LoginForm } from "../../components/LoginForm";
import { LogoutButton } from "../../components/LogoutButton";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const { user } = useContext(UserContext);

  return (
    <section>
      <h1>Login</h1>
      <div>{user ? <LogoutButton /> : <LoginForm />}</div>
    </section>
  );
};

export default Login;
