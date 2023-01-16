import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div>Home</div>
      {user && <div>Logged in as: {user.email}</div>}
    </>
  );
};

export default Home;
