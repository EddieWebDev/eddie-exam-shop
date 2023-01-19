import { useParams } from "react-router-dom";
import { useGetUserById } from "../../queries/users/hooks/useGetUserById";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { LogoutButton } from "../../components/LogoutButton";

function Product() {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const { data: userData, isLoading, isError, error } = useGetUserById(id);

  if (!user || (user.id !== parseInt(id) && user.role !== "admin")) {
    return <div>401 Authorization denied</div>;
  }

  if (isLoading) {
    <div>Loading...</div>;
  }

  if (isError) {
    <div>{error.message}</div>;
  }

  return (
    <section>
      <h1>User</h1>
      {userData && (
        <div>
          <h3>User details</h3>
          <div>
            Firstname:{userData.firstname}
            <br />
            Lastname:{userData.lastname}
            <br />
            Email:{userData.email}
            <br />
            Role:{userData.role}
          </div>
          {user.id === parseInt(id) && <LogoutButton />}
        </div>
      )}
    </section>
  );
}

export default Product;
