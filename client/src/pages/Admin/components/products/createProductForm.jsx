import { useForm } from "react-hook-form";
import { useCreateProduct } from "../../../../queries/products/hooks/useCreateProduct";
import {
  FormContainer,
  Form,
  Input,
  SubmitInput,
  FormError,
} from "../../../../styles/styledForm";

export const CreateProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate, isSuccess, isLoading } = useCreateProduct();

  const handleCreateProduct = (newProduct) => {
    mutate(newProduct);
    reset();
  };

  return (
    <>
      <div>CREATE Product</div>
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
          <Input
            {...register("category", {
              required: "Category is required",
              minLength: { value: 1, message: "Min length 1" },
            })}
            placeholder="Category"
          />
          <FormError>{errors.category?.message}</FormError>
          <Input
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
      </FormContainer>
      {isSuccess && <h5>SUCCESS</h5>}
      {isLoading && <h5>LOADING</h5>}
    </>
  );
};
