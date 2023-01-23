import { useParams } from "react-router-dom";
import { useGetProductById } from "../../queries/products/hooks/useGetProductById";
import {
  SingleProductContainer,
  SingleProductImg,
  SingleProductInfoContainer,
} from "../../styles/styledProduct";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AddToCartButton } from "../../styles/styledButtons";

function Product() {
  const { id } = useParams();

  const cart = useContext(CartContext);

  const { data, isLoading, isError, error } = useGetProductById(id);

  if (isLoading) {
    <div>Loading...</div>;
  }

  if (isError) {
    <div>{error.message}</div>;
  }

  return (
    <section>
      {data && (
        <div>
          <h2>{data.productname}</h2>
          <SingleProductContainer>
            <div className="flex flex-wrap max-w-full p-4 gap-4">
              <SingleProductImg
                src={`${data.product_img_url}`}
                alt={`${data.productname}`}
              />
              <SingleProductInfoContainer>
                <h5>
                  <b>Product id: </b>
                  {data.id}
                </h5>
                <h5>
                  <b>Price: </b>${data.price}
                </h5>
                <h5>
                  <b>Stock: </b>
                  {data.stock}
                </h5>
                <h5>
                  <b>Category: </b>
                  {data.category}
                </h5>
                <h5>
                  <b>Description: </b>
                  <p className="text-sm">{data.description}</p>
                </h5>
              </SingleProductInfoContainer>
            </div>
            {data.stock < 1 ? (
              <AddToCartButton className="bg-primary-green" disabled>
                Out of stock
              </AddToCartButton>
            ) : (
              <AddToCartButton
                onClick={() =>
                  cart.addOneToCart(
                    data.id,
                    data.productname,
                    data.price,
                    data.stock
                  )
                }
              >
                Add to cart
              </AddToCartButton>
            )}
          </SingleProductContainer>
        </div>
      )}
    </section>
  );
}

export default Product;
