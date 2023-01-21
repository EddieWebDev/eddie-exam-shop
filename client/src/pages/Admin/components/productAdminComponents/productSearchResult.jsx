export const ProductSearchResult = ({
  data,
  isInitialLoading,
  isError,
  error,
  handleSearchClick,
}) => {
  if (isInitialLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center">{error.message}</div>;
  }

  return (
    <div className="text-sm p-4">
      <ul>
        {data &&
          data.map((product) => (
            <li
              key={product.id}
              onClick={() => handleSearchClick(product.id)}
              className="my-1 hover:scale-100 hover:text-black hover:bg-primary-beige hover:cursor-pointer"
            >
              <b>Id: </b>
              {product.id}
              <b> Name: </b>
              {product.productname}
              <b> Price: </b>${product.price}
              <b> Stock: </b>
              {product.stock}
            </li>
          ))}
      </ul>
    </div>
  );
};
