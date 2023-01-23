import { useGetProductsByCategory } from "../../queries/products/hooks/useGetProductsByCategory";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
  ProductsContainer,
  ProductContainer,
  ProductImg,
} from "../../styles/styledProducts";
import { AddToCartButton } from "../../styles/styledButtons";

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
      <div>
        <h2>{category}</h2>
        <ProductsContainer>
          {data &&
            data.map((product) => (
              <ProductContainer key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <h3>{product.productname}</h3>
                  <ProductImg
                    src={`${product.product_img_url}`}
                    alt={`${product.productname}`}
                  />
                </Link>
                {product.stock < 1 ? (
                  <AddToCartButton className="bg-primary-green" disabled>
                    Out of stock
                  </AddToCartButton>
                ) : (
                  <AddToCartButton
                    onClick={() =>
                      cart.addOneToCart(
                        product.id,
                        product.productname,
                        product.price,
                        product.stock
                      )
                    }
                  >
                    Add to cart
                  </AddToCartButton>
                )}
              </ProductContainer>
            ))}
        </ProductsContainer>
      </div>
    </section>
  );
};

export default Categories;
