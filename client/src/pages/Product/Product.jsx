import { useParams } from "react-router-dom";
import { useGetProductById } from "../../queries/products/hooks/useGetProductById";

function Product() {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useGetProductById(id);

  if (isLoading) {
    <div>Loading...</div>;
  }

  if (isError) {
    <div>{error.message}</div>;
  }

  return (
    <section>
      <h1>Product</h1>
      <h2>
        {data && (
          <div>
            Name:{data.productname}
            <br />
            Price:{data.price}
            <br />
            Description:{data.description}
          </div>
        )}
      </h2>
    </section>
  );
}

export default Product;
