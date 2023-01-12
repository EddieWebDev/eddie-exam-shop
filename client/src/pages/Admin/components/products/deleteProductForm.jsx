import { useForm } from "react-hook-form";
import { useDeleteProduct } from "../../../../queries/products/hooks/useDeleteProduct";
import {
  FormContainer,
  Form,
  Input,
  SubmitInput,
  FormError,
} from "../../../../styles/styledForm";

export const DeleteProductForm = ({ product }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isSuccess } = useDeleteProduct();

  if (isSuccess) {
    return <div>SUCCESS DELETE</div>;
  }

  const handleDeleteProduct = (productId) => {
    const { id } = productId;
    mutate(id);
  };

  return (
    <>
      <div>DELETE PRODUCT</div>
      <FormContainer>
        <Form
          onSubmit={handleSubmit((productId) => handleDeleteProduct(productId))}
        >
          <Input
            {...register("id", { required: "This is required" })}
            placeholder="Id of product to delete"
            defaultValue={product?.id}
            autoComplete="off"
          />
          <FormError>{errors.id?.message}</FormError>
          <SubmitInput type="submit" />
        </Form>
      </FormContainer>
    </>
  );
};
