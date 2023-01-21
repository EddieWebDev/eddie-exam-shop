import { useForm } from "react-hook-form";
import { useUpdateUser } from "../../../../queries/users/hooks/useUpdateUser";
import { useGetUserById } from "../../../../queries/users/hooks/useGetUserById";
import {
  FormContainer,
  Form,
  Input,
  SubmitInput,
  FormError,
} from "../../../../styles/styledForm";
import { useEffect } from "react";
import { DeleteUserButton } from "./deleteUserButton";

export const UpdateUserForm = ({ id, setSearchedUserId }) => {
  const {
    data: user,
    isInitialLoading: userIsInitalLoading,
    isError: userIsError,
    error: userError,
  } = useGetUserById(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const {
    mutate,
    isLoading: updateLoading,
    isError: updateIsError,
    error: updateError,
  } = useUpdateUser();

  const handleUpdateUser = (updatedUser) => {
    mutate(updatedUser);
    reset();
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <div className="w-full text-center text-white bg-primary-green">
        <h5>Update user</h5>
      </div>
      {userIsInitalLoading && <h5 className="mt-4 text-center">Loading...</h5>}
      {userIsError && <h5 className="mt-4 text-center">{userError.message}</h5>}
      {user && (
        <FormContainer>
          <Form
            className="gap-px"
            onSubmit={handleSubmit((updatedUser) =>
              handleUpdateUser(updatedUser)
            )}
          >
            <label htmlFor="firstname">First Name</label>
            <Input
              {...register("firstname", {
                required: "This is required",
                minLength: { value: 2, message: "Min length 2" },
              })}
              placeholder="First Name"
              defaultValue={user.firstname}
              id="firstname"
              type="text"
            />
            <FormError>{errors.firstname?.message}</FormError>
            <label htmlFor="lastname">Last Name</label>
            <Input
              {...register("lastname", {
                required: "This is required",
                minLength: { value: 4, message: "Min length 4" },
              })}
              placeholder="Last Name"
              defaultValue={user.lastname}
              id="lastname"
              type="text"
            />
            <FormError>{errors.lastname?.message}</FormError>
            <label htmlFor="email">Email</label>
            <Input
              {...register("email", {
                required: "This is required",
                minLength: { value: 4, message: "Min length 4" },
              })}
              placeholder="Email"
              defaultValue={user.email}
              id="email"
              type="email"
            />
            <FormError>{errors.email?.message}</FormError>
            <label htmlFor="password">Password</label>
            <Input
              {...register("password", {
                required: "This is required",
                minLength: { value: 4, message: "Min length 4" },
              })}
              placeholder="Password"
              defaultValue={user.password}
              id="password"
              type="password"
            />
            <FormError>{errors.password?.message}</FormError>
            <Input {...register("id")} value={user.id} hidden id="id" />
            <div className="flex gap-4">
              <SubmitInput className="mt-4" type="submit" value="Update user" />
              {updateLoading && (
                <h5 className="mt-4 text-center">Loading...</h5>
              )}
              {updateIsError && (
                <h5 className="mt-4 text-center">{updateError.message}</h5>
              )}
              <DeleteUserButton id={id} setSearchedUserId={setSearchedUserId} />
            </div>
          </Form>
        </FormContainer>
      )}
    </div>
  );
};
