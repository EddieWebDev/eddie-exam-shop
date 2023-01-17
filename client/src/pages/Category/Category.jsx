import { useGetProductsByCategory } from "../../queries/products/hooks/useGetProductsByCategory";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Categories = () => {
  const { category } = useParams();

  const cart = useContext(CartContext);

  const { data, isInitialLoading, isError, error } =
    useGetProductsByCategory(category);

  if (isInitialLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <section>
      <h1>{category}</h1>
      <div>
        {data &&
          data.map((product) => (
            <div key={product.id}>
              <Link to={`/product/${product.id}`}>
                <div>{product.productname}</div>
              </Link>

              <button
                onClick={() =>
                  cart.addOneToCart(
                    product.id,
                    product.productname,
                    product.price
                  )
                }
              >
                Add to cart
              </button>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Categories;
