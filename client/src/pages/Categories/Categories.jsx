import { useGetProductCategories } from "../../queries/products/hooks/useGetProductCategories";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data, isInitialLoading, isError, error } = useGetProductCategories();

  if (isInitialLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <section>
      <h1>Categories</h1>
      <div>
        {data &&
          data.map((category, i) => (
            <Link key={i} to={`/categories/${category}`}>
              <div>{category}</div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Categories;
