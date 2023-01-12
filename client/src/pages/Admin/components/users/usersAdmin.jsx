import { CreateUserForm } from "../../../../components/createUserForm";
import { GetUserByIdForm } from "../../../../components/getUserByIdForm";
import { useGetAllUsers } from "../../../../queries/users/hooks/useGetAllUsers";

export const UsersAdmin = () => {
  const { data, isError, error, isLoading } = useGetAllUsers();

  return (
    <div>
      <div className="flex">
        <div className="w-1/3">
          <CreateUserForm />
          <GetUserByIdForm />
        </div>
        <div>
          <h1>Users</h1>
          {isLoading && <div>Loading...</div>}
          {isError && <div>{error.message}</div>}
          <ul>
            {data?.map((user) => (
              <li key={user.id}>
                Id:{user.id} Email:{user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
