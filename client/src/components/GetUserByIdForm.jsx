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
import { UpdateUserForm } from "./UpdateUserForm";
import { DeleteUserForm } from "./DeleteUserForm";

export const GetUserByIdForm = () => {
  const [searchId, setSearchId] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      id: "",
    },
  });

  const { data, isInitialLoading, isError, error } = useGetUserById(searchId);
  if(data) {
    console.log(data)
  }

  const handleGetUserById = (userId) => {
    let { id } = userId;
    setSearchId(id);
    reset();
  };

  if (isInitialLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }

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
      {data &&
        (data.length === 0 ? (
          <div>No user with that id</div>
        ) : (
          <div>
            Name:{data[0]?.firstname} Id:{data[0]?.id}
          </div>
        ))}
      {data && (
        <>
          <UpdateUserForm user={data[0]}/>
          <DeleteUserForm user={data[0]}/>
        </>
      )}
    </>
  );
};
