import { useGetAllCategories } from "../../queries/categories/hooks/useGetAllCategories";
import { Link } from "react-router-dom";
import {
  CategoryContainer,
  CategoriesContainer,
  CategoryImg,
} from "../../styles/styledCategories";

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
      <div>
        <h2>Categories</h2>
        <CategoriesContainer>
          {data &&
            data.map((category) => (
              <CategoryContainer key={category.id}>
                <Link to={`/category/${category.category_name}`}>
                  <h3>{category.category_name}</h3>
                  <CategoryImg
                    src={`${category.category_img_url}`}
                    alt={`${category.category_name}`}
                  />
                </Link>
              </CategoryContainer>
            ))}
        </CategoriesContainer>
      </div>
    </section>
  );
};

export default Categories;
