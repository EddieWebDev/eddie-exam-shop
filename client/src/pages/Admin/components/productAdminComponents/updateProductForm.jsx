import { useForm } from "react-hook-form";
import { useUpdateProduct } from "../../../../queries/products/hooks/useUpdateProduct";
import { useGetProductById } from "../../../../queries/products/hooks/useGetProductById";
import { useGetAllCategories } from "../../../../queries/categories/hooks/useGetAllCategories";
import {
  FormContainer,
  Form,
  Input,
  SubmitInput,
  FormError,
  Textarea,
  Select,
} from "../../../../styles/styledForm";
import { useEffect } from "react";
import { DeleteProductButton } from "./deleteProductButton";

export const UpdateProductForm = ({ id, setSearchedProductId }) => {
  const {
    data: product,
    isInitialLoading: productIsInitalLoading,
    isError: productIsError,
    error: productError,
  } = useGetProductById(id);

  const {
    data: categories,
    isInitialLoading,
    isError: isCategoriesError,
    error: categoriesError,
  } = useGetAllCategories();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const {
    mutate,
    isLoading: updateLoading,
    isError: updateIsError,
    error: updateError,
  } = useUpdateProduct();

  const handleUpdateProduct = (updatedProduct) => {
    mutate(updatedProduct);
    reset();
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isInitialLoading) {
    return <div>Loading...</div>;
  }

  if (isCategoriesError) {
    return <div>{categoriesError.message}</div>;
  }

  return (
    <div>
      <div className="w-full text-center text-white bg-primary-green">
        <h5>Update product</h5>
      </div>
      {productIsInitalLoading && (
        <h5 className="mt-4 text-center">Loading...</h5>
      )}
      {productIsError && (
        <h5 className="mt-4 text-center">{productError.message}</h5>
      )}
      {product && (
        <FormContainer>
          <Form
            className="gap-px"
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
                categories.map((category) => (
                  <option key={category.id} value={`${category.category_name}`}>
                    {category.category_name}
                  </option>
                ))}
            </Select>
            <FormError>{errors.category?.message}</FormError>
            <label htmlFor="description">Description</label>
            <Textarea
              {...register("description", {
                required: "This is required",
                minLength: { value: 1, message: "Min length 1" },
              })}
              placeholder="Description"
              defaultValue={product.description}
              id="description"
            />
            <FormError>{errors.description?.message}</FormError>
            <label htmlFor="product_img_url">Product img url</label>
            <Input
              {...register("product_img_url", {
                required: "Product image url is required",
                minLength: { value: 2, message: "Min length 2" },
              })}
              placeholder="Product Image Url"
              type="text"
              defaultValue={product.product_img_url}
              id="product_img_url"
            />
            <FormError>{errors.product_img_url?.message}</FormError>
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
            <div className="flex gap-4">
              <SubmitInput
                className="mt-4"
                type="submit"
                value="Update product"
              />
              {updateLoading && (
                <h5 className="mt-4 text-center">Loading...</h5>
              )}
              {updateIsError && (
                <h5 className="mt-4 text-center">{updateError.message}</h5>
              )}
              <DeleteProductButton
                id={id}
                setSearchedProductId={setSearchedProductId}
              />
            </div>
          </Form>
        </FormContainer>
      )}
    </div>
  );
};
