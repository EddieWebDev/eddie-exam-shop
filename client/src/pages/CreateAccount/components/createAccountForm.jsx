import { useForm } from "react-hook-form";
import { useCreateUser } from "../../../queries/users/hooks/useCreateUser";
import {
  FormContainer,
  Form,
  Input,
  SubmitInput,
  FormError,
} from "../../../styles/styledForm";

export const CreateAccountForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate, isSuccess, isLoading, isError, error } = useCreateUser();

  const handleCreateUser = (newUser) => {
    mutate(newUser);
    reset();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full text-center text-white bg-primary-green"></div>
      <FormContainer>
        <Form onSubmit={handleSubmit((newUser) => handleCreateUser(newUser))}>
          <Input
            {...register("firstname", {
              required: "First name is required",
              minLength: { value: 2, message: "Min length 2" },
            })}
            placeholder="First Name"
            type="text"
          />
          <FormError>{errors.firstname?.message}</FormError>
          <Input
            {...register("lastname", {
              required: "Last name is required",
              minLength: { value: 2, message: "Min length 2" },
            })}
            placeholder="Last Name"
            type="text"
          />
          <FormError>{errors.lastname?.message}</FormError>
          <Input
            {...register("email", {
              required: "Email is required",
              minLength: { value: 5, message: "Min length 5" },
            })}
            placeholder="Email"
            type="email"
          />
          <FormError>{errors.email?.message}</FormError>
          <Input
            {...register("password", {
              required: "Password is required",
              minLength: { value: 5, message: "Min length 5" },
            })}
            placeholder="Password"
            type="password"
          />
          <FormError>{errors.password?.message}</FormError>
          <SubmitInput type="submit" value="Create account" />
        </Form>
        {isSuccess && <h5 className="mt-4">Account created</h5>}
        {isLoading && <h5 className="mt-4">Loading...</h5>}
        {isError && <h5 className="mt-4">{error.message}</h5>}
      </FormContainer>
    </div>
  );
};
