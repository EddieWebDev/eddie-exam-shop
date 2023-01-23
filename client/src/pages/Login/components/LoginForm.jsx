import { useForm } from "react-hook-form";
import {
  Input,
  Form,
  SubmitInput,
  FormError,
} from "../../../styles/styledForm";
import { useLogin } from "../../../queries/auth/hooks/useLogin";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isLoading, isSuccess, isError, error } = useLogin();

  const handleLogin = (loginCredentials) => {
    mutate(loginCredentials);
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit((loginCredentials) =>
          handleLogin(loginCredentials)
        )}
      >
        <Input
          {...register("email", {
            required: "Required",
          })}
          placeholder="Email"
        />
        <FormError>{errors.email?.message}</FormError>
        <Input
          {...register("password", {
            required: "Required",
          })}
          placeholder="Password"
          type="password"
        />
        <FormError>{errors.password?.message}</FormError>
        <SubmitInput type="submit" value="Log in" />
      </Form>
      {isLoading && <div>Loading...</div>}
      {isError && (
        <div>
          {error.message} {error.response.data}
        </div>
      )}
      {isSuccess && <div>Logged In</div>}
    </>
  );
};
