import { useForm } from "react-hook-form";
import { useUpdateUser } from "../queries/users/hooks/useUpdateUser";
import {
  FormContainer,
  Form,
  Input,
  SubmitInput,
  FormError,
} from "../styles/styledForm";

export const UpdateUserForm = ({ user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useUpdateUser();

  const handleUpdateUser = (updatedUser) => {
    mutate(updatedUser);
  };

  return (
    <>
      <div>UPDATE USER</div>
      <FormContainer>
        <Form
          onSubmit={handleSubmit((updatedUser) =>
            handleUpdateUser(updatedUser)
          )}
        >
          <label htmlFor="firstname">First Name</label>
          <Input
            {...register("firstname", {
              required: "This is required",
              minLength: { value: 4, message: "Min length 4" },
            })}
            placeholder="First Name"
            defaultValue={user.firstname}
            id="firstname"
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
          />
          <FormError>{errors.lastname?.message}</FormError>
          <label htmlFor="username">Username</label>
          <Input
            {...register("username", {
              required: "This is required",
              minLength: { value: 4, message: "Min length 4" },
            })}
            placeholder="User Name"
            defaultValue={user.username}
            id="username"
          />
          <FormError>{errors.username?.message}</FormError>
          <label htmlFor="password">Password</label>
          <Input
            {...register("password", {
              required: "This is required",
              minLength: { value: 4, message: "Min length 4" },
            })}
            placeholder="Password"
            defaultValue={user.password}
            id="password"
          />
          <FormError>{errors.password?.message}</FormError>
          <Input {...register("id")} value={user.id} hidden id="id" />
          <SubmitInput type="submit" />
        </Form>
      </FormContainer>
    </>
  );
};
