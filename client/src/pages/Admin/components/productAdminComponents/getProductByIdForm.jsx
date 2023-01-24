import { useForm } from "react-hook-form";
import { useGetProductById } from "../../../../queries/products/hooks/useGetProductById";
import { useState } from "react";
import {
  FormContainer,
  Form,
  Input,
  SubmitInput,
  FormError,
} from "../../../../styles/styledForm";
import { UpdateProductForm } from "./updateProductForm";
import { DeleteProductForm } from "./deleteProductForm";

export const GetProductByIdForm = () => {
  const [searchId, setSearchId] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { data, isInitialLoading, isError, error } =
    useGetProductById(searchId);

  const handleGetProductById = (productId) => {
    let { id } = productId;
    setSearchId(id);
    reset();
  };

  return (
    <>
      <div>GET PRODUCT BY ID</div>
      <FormContainer>
        <Form
          onSubmit={handleSubmit((productId) =>
            handleGetProductById(productId)
          )}
        >
          <Input
            {...register("id", { required: "This is required" })}
            placeholder="Id of product to get"
            autoComplete="off"
          />
          <FormError>{errors.id?.message}</FormError>
          <SubmitInput type="submit" />
        </Form>
      </FormContainer>
      {isInitialLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      {data && (
        <>
          <UpdateProductForm product={data} />
          <DeleteProductForm product={data} />
        </>
      )}
    </>
  );
};
