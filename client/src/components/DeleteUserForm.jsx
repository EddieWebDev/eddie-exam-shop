import { useForm } from "react-hook-form";
import { useDeleteUser } from "../queries/users/hooks/useDeleteUser";
import {
  FormContainer,
  Form,
  Input,
  SubmitInput,
  FormError,
} from "../styles/styledForm";

export const DeleteUserForm = ({user}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useDeleteUser();

  const handleDeleteUser = (userId) => {
    const { id } = userId;
    mutate(id);
  };

  return (
    <>
      <div>DELETE USER</div>
      <FormContainer>
        <Form onSubmit={handleSubmit((userId) => handleDeleteUser(userId))}>
          <Input
            {...register("id", { required: "This is required" })}
            placeholder="Id of user to delete"
            defaultValue={user?.id}
            autoComplete="off"
          />
          <FormError>{errors.id?.message}</FormError>
          <SubmitInput type="submit" />
        </Form>
      </FormContainer>
    </>
  );
};
