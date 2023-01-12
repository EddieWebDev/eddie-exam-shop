import { useForm } from "react-hook-form";
import { useUpdateProduct } from "../../../../queries/products/hooks/useUpdateProduct";
import {
  FormContainer,
  Form,
  Input,
  SubmitInput,
  FormError,
} from "../../../../styles/styledForm";

export const UpdateProductForm = (product) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isSuccess } = useUpdateProduct();

  const handleUpdateProduct = (updatedProduct) => {
    mutate(updatedProduct);
  };

  if (isSuccess) {
    console.log("det fungerade!");
  }

  return (
    <>
      <div>UPDATE PRODUCT</div>
      <FormContainer>
        <Form
          onSubmit={handleSubmit((updatedProduct) =>
            handleUpdateProduct(updatedProduct)
          )}
        >
          <label htmlFor="productname">Product Name</label>
          <Input
            {...register("productname", {
              required: "This is required",
              minLength: { value: 1, message: "Min length 1" },
            })}
            placeholder="Product Name"
            defaultValue={product.productname}
            id="productname"
          />
          <FormError>{errors.productname?.message}</FormError>
          <label htmlFor="category">Category Name</label>
          <Input
            {...register("category", {
              required: "This is required",
              minLength: { value: 1, message: "Min length 1" },
            })}
            placeholder="Category"
            defaultValue={product.category}
            id="category"
          />
          <FormError>{errors.category?.message}</FormError>
          <label htmlFor="description">Description</label>
          <Input
            {...register("description", {
              required: "This is required",
              minLength: { value: 1, message: "Min length 1" },
            })}
            placeholder="Description"
            defaultValue={product.description}
            id="description"
          />
          <FormError>{errors.description?.message}</FormError>
          <label htmlFor="price">Price</label>
          <Input
            {...register("price", {
              required: "This is required",
              minLength: { value: 1, message: "Min length 1" },
            })}
            placeholder="price"
            defaultValue={product.price}
            id="price"
          />
          <FormError>{errors.price?.message}</FormError>
          <label htmlFor="stock">Stock</label>
          <Input
            {...register("stock", {
              required: "This is required",
              minLength: { value: 1, message: "Min length 1" },
            })}
            placeholder="stock"
            defaultValue={product.stock}
            id="stock"
          />
          <FormError>{errors.stock?.message}</FormError>
          <Input {...register("id")} value={product.id} hidden id="id" />
          <SubmitInput type="submit" />
        </Form>
      </FormContainer>
    </>
  );
};
