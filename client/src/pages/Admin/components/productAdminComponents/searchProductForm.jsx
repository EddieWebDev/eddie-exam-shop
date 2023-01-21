import { useForm } from "react-hook-form";
import { useSearchProduct } from "../../../../queries/products/hooks/useSearchProduct";
import {
  FormContainer,
  Form,
  Input,
  FormError,
} from "../../../../styles/styledForm";
import { ProductSearchResult } from "./productSearchResult";

export const SearchProductForm = ({ handleSearchClick }) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useForm();

  const { data, isInitialLoading, isError, error } = useSearchProduct(
    watch("productsearchword")
  );

  return (
    <div>
      <div className="w-full text-center text-white bg-primary-green">
        <h5>Search product by name</h5>
      </div>
      <FormContainer>
        <Form>
          <Input
            {...register("productsearchword")}
            placeholder="Product name includes..."
            type="search"
          />
          <FormError>{errors.productsearchword?.message}</FormError>
        </Form>
      </FormContainer>
      <ProductSearchResult
        data={data}
        handleSearchClick={handleSearchClick}
        isInitialLoading={isInitialLoading}
        isError={isError}
        error={error}
      />
    </div>
  );
};
