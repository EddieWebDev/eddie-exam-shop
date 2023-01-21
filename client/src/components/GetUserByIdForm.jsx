// Unused component

import { useForm } from "react-hook-form";
import { useGetUserById } from "../queries/users/hooks/useGetUserById";
import { useState } from "react";
import {
  FormContainer,
  Form,
  Input,
  SubmitInput,
  FormError,
} from "../styles/styledForm";
import { UpdateUserForm } from "../pages/Admin/components/userAdminComponents/updateUserForm";
import { DeleteUserForm } from "./deleteUserForm";

export const GetUserByIdForm = () => {
  const [searchId, setSearchId] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { data, isInitialLoading, isError, error } = useGetUserById(searchId);

  const handleGetUserById = (userId) => {
    let { id } = userId;
    setSearchId(id);
    reset();
  };

  return (
    <>
      <div>GET USER BY ID</div>
      <FormContainer>
        <Form onSubmit={handleSubmit((userId) => handleGetUserById(userId))}>
          <Input
            {...register("id", { required: "This is required" })}
            placeholder="Id of user to get"
            autoComplete="off"
          />
          <FormError>{errors.id?.message}</FormError>
          <SubmitInput type="submit" />
        </Form>
      </FormContainer>
      {isInitialLoading && <div>Loading</div>}
      {isError && <div>{error.message}</div>}
      {data && (
        <>
          <UpdateUserForm user={data} />
          <DeleteUserForm user={data} />
        </>
      )}
    </>
  );
};
