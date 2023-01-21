import React from "react";
import { DeleteButton } from "../../../../styles/styledButtons";
import { useDeleteUser } from "../../../../queries/users/hooks/useDeleteUser";

export const DeleteUserButton = ({ id, setSearchedUserId }) => {
  const { mutate, isLoading, isError, error } = useDeleteUser();

  const handleDeleteUser = (id) => {
    mutate(id);
    setSearchedUserId(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <DeleteButton className="mt-4" onClick={() => handleDeleteUser(id)}>
        Delete user
      </DeleteButton>
    </div>
  );
};
