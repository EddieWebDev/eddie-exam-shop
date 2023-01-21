import { CreateUserForm } from "./userAdminComponents/createUserForm";
import { SearchUserForm } from "./userAdminComponents/searchUserForm";
import { AdminContainer } from "../../../styles/styledAdmin";
import { UpdateUserForm } from "./userAdminComponents/updateUserForm";
import { SearchedUserOrders } from "./userAdminComponents/searchedUserOrders";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

export const UsersAdmin = () => {
  const [searchedUserId, setSearchedUserId] = useState(null);

  const queryClient = useQueryClient();

  const handleSearchClick = async (id) => {
    await queryClient.invalidateQueries({ queryKey: ["searched-user"] });
    await queryClient.invalidateQueries({ queryKey: ["user-by-id"] });
    setSearchedUserId(id);
  };

  return (
    <div className="flex flex-wrap gap-8">
      <AdminContainer className="max-h-[410px]">
        <CreateUserForm />
      </AdminContainer>
      <AdminContainer className="max-h-[410px]">
        <SearchUserForm handleSearchClick={handleSearchClick} />
      </AdminContainer>
      <AdminContainer className="max-h-[410px]">
        <UpdateUserForm
          id={searchedUserId}
          setSearchedUserId={setSearchedUserId}
        />
      </AdminContainer>
      <AdminContainer>
        <SearchedUserOrders id={searchedUserId} />
      </AdminContainer>
    </div>
  );
};
