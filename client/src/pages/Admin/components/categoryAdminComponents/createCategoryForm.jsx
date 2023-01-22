import { useForm } from "react-hook-form";
import { useCreateCategory } from "../../../../queries/categories/hooks/useCreateCategory";
import {
  FormContainer,
  Form,
  Input,
  SubmitInput,
  FormError,
} from "../../../../styles/styledForm";

export const CreateCategoryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate, isSuccess, isLoading, isError, error } = useCreateCategory();

  const handleCreateCategory = (newCategory) => {
    mutate(newCategory);
    reset();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full text-center text-white bg-primary-green">
        <h5>Create category</h5>
      </div>
      <FormContainer>
        <Form
          onSubmit={handleSubmit((newCategory) =>
            handleCreateCategory(newCategory)
          )}
        >
          <Input
            {...register("category_name", {
              required: "Category name is required",
              minLength: { value: 2, message: "Min length 2" },
            })}
            placeholder="Category Name"
            type="text"
          />
          <FormError>{errors.categoryname?.message}</FormError>
          <Input
            {...register("category_img_url", {
              required: "Category image url is required",
              minLength: { value: 2, message: "Min length 2" },
            })}
            placeholder="Category Image Url"
            type="text"
          />
          <FormError>{errors.category_img_url?.message}</FormError>
          <SubmitInput type="submit" value="Create category" />
        </Form>
        {isSuccess && <h5 className="mt-4">Category created</h5>}
        {isLoading && <h5 className="mt-4">Loading...</h5>}
        {isError && <h5 className="mt-4">{error.message}</h5>}
      </FormContainer>
    </div>
  );
};
