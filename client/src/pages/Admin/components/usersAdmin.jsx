import { CreateUserForm } from "../../../components/createUserForm";
import { GetUserByIdForm } from "../../../components/getUserByIdForm";
import { SearchUserForm } from "./userAdminComponents/searchUserForm";

export const UsersAdmin = () => {

  return (
    <div>
      <div className="flex">
        <div className="w-1/3">
          <CreateUserForm />
          <GetUserByIdForm />
        </div>
        <div>
          <SearchUserForm />
        </div>
      </div>
    </div>
  );
};
