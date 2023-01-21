import { useForm } from "react-hook-form";
import { useCreateProduct } from "../../../../queries/products/hooks/useCreateProduct";
import { useGetProductCategories } from "../../../../queries/products/hooks/useGetProductCategories";
import {
  FormContainer,
  Form,
  Input,
  SubmitInput,
  FormError,
  Textarea,
  Select,
} from "../../../../styles/styledForm";

export const CreateProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate, isSuccess, isLoading, isError, error } = useCreateProduct();

  const {
    data: categories,
    isInitialLoading,
    isError: isCategoriesError,
    error: categoriesError,
  } = useGetProductCategories();

  if (isInitialLoading) {
    console.log("Loading...");
  }
  if (isCategoriesError) {
    console.log(categoriesError);
  }

  const handleCreateProduct = (newProduct) => {
    mutate(newProduct);
    reset();
  };

  return (
    <div>
      <div className="w-full text-center text-white bg-primary-green">
        <h5>Create product</h5>
      </div>
      <FormContainer>
        <Form
          onSubmit={handleSubmit((newProduct) =>
            handleCreateProduct(newProduct)
          )}
        >
          <Input
            {...register("productname", {
              required: "Product name is required",
              minLength: { value: 1, message: "Min length 1" },
            })}
            placeholder="Product Name"
          />
          <FormError>{errors.productname?.message}</FormError>
          <Select
            {...register("category", {
              required: "Category is required",
            })}
            defaultValue=""
          >
            <option value="" disabled>
              --Choose a category--
            </option>
            {categories &&
              categories.map((category, i) => (
                <option key={i} value={`${category}`}>
                  {category}
                </option>
              ))}
          </Select>
          <FormError>{errors.category?.message}</FormError>
          <Textarea
            {...register("description", {
              required: "Description is required",
              minLength: { value: 1, message: "Min length 1" },
            })}
            placeholder="Description"
          />
          <FormError>{errors.description?.message}</FormError>
          <Input
            {...register("price", {
              required: "Price is required",
              minLength: { value: 1, message: "Min length 1" },
            })}
            placeholder="Price"
          />
          <FormError>{errors.price?.message}</FormError>
          <Input
            {...register("stock", {
              required: "Stock is required",
              minLength: { value: 1, message: "Min length 1" },
            })}
            placeholder="Stock"
          />
          <FormError>{errors.price?.message}</FormError>
          <SubmitInput type="submit" />
        </Form>
        {isSuccess && <h5 className="mt-4">Product created</h5>}
        {isLoading && <h5 className="mt-4">Loading...</h5>}
        {isError && <h5 className="mt-4">{error.message}</h5>}
      </FormContainer>
    </div>
  );
};
