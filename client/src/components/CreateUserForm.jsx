import { useForm } from "react-hook-form";
import { useCreateUser } from "../queries/users/hooks/useCreateUser";
import { FormContainer, Form, Input, SubmitInput, FormError } from "../styles/styledForm";

export const CreateUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate, isSuccess, isLoading } = useCreateUser();

  const handleCreateUser = (newUser) => {
    mutate(newUser);
    reset();
  };

  return (
    <>
      <div>CREATE USER</div>
      <FormContainer>
      <Form onSubmit={handleSubmit((newUser) => handleCreateUser(newUser))}>
        <Input
          {...register("firstname", {
            required: "First name is required",
            minLength: { value: 4, message: "Min length 4" },
          })}
          placeholder="First Name"
        />
        <FormError>{errors.firstname?.message}</FormError>
        <Input
          {...register("lastname", {
            required: "Last name is required",
            minLength: { value: 4, message: "Min length 4" },
          })}
          placeholder="Last Name"
        />
        <FormError>{errors.lastname?.message}</FormError>
        <Input
          {...register("username", {
            required: "Username is required",
            minLength: { value: 4, message: "Min length 4" },
          })}
          placeholder="User Name"
        />
        <FormError>{errors.username?.message}</FormError>
        <Input
          {...register("password", {
            required: "Password is required",
            minLength: { value: 4, message: "Min length 4" },
          })}
          placeholder="Password"
        />
        <FormError>{errors.password?.message}</FormError>
        <SubmitInput type="submit" />
      </Form>
      </FormContainer>
      {isSuccess && <h5>SUCCESS</h5>}
      {isLoading && <h5>LOADING</h5>}
    </>
  );
};
