import { useForm } from "react-hook-form";
import { useSearchUser } from "../../../../queries/users/hooks/useSearchUser";
import {
  FormContainer,
  Form,
  Input,
  FormError,
} from "../../../../styles/styledForm";
import { UsersContainer } from "./usersContainer";

export const SearchUserForm = () => {

  const {
    register,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      searchword: "",
    },
  });

  const { data, isInitialLoading, isError, error } = useSearchUser(
    watch("searchword")
  );

  return (
    <>
      <div>SEARCH USER BY EMAIL</div>
      <FormContainer>
        <Form>
          <Input
            {...register("searchword")}
            placeholder="email includes..."
            autoComplete="off"
          />
          <FormError>{errors.searchword?.message}</FormError>
        </Form>
      </FormContainer>
      <h3>Users</h3>
      <UsersContainer data={data} isInitialLoading={isInitialLoading} isError={isError} error={error}/>
    </>
  );
};
