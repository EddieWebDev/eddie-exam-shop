import { useForm } from "react-hook-form";
import { useSearchUser } from "../../../../queries/users/hooks/useSearchUser";
import {
  FormContainer,
  Form,
  Input,
  FormError,
} from "../../../../styles/styledForm";
import { SearchResult } from "./searchResult";

export const SearchUserForm = ({ handleSearchClick }) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useForm();

  const { data, isInitialLoading, isError, error } = useSearchUser(
    watch("searchword")
  );

  return (
    <div>
      <div className="w-full text-center text-white bg-primary-green">
        <h5>Search user by email</h5>
      </div>
      <FormContainer>
        <Form>
          <Input
            {...register("searchword")}
            placeholder="Email includes..."
            type="search"
          />
          <FormError>{errors.searchword?.message}</FormError>
        </Form>
      </FormContainer>
      <SearchResult
        data={data}
        handleSearchClick={handleSearchClick}
        isInitialLoading={isInitialLoading}
        isError={isError}
        error={error}
      />
    </div>
  );
};
