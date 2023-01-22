import { useGetAllCategories } from "../../queries/categories/hooks/useGetAllCategories";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data, isInitialLoading, isError, error } = useGetAllCategories();

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
          data.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.category_name}`}
            >
              <div>{category.category_name}</div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Categories;
