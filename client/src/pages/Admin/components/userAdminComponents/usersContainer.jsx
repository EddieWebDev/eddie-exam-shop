import { Link } from "react-router-dom";

export const UsersContainer = ({ data, isInitialLoading, isError, error }) => {
  if (isInitialLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <ul>
        {data &&
          data.map((user) => (
            <Link key={user.id} to={`/user/${user.id}`}>
              <li key={user.id}>
                <b>Id:</b>{user.id} <b>Name:</b>{user.firstname} {user.lastname} <b>Email:</b>{user.email}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};
