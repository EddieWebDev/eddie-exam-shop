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
        <h3 className="text-4xl">Categories</h3>
        <CategoriesContainer>
          {data &&
            data.map((category) => (
              <CategoryContainer key={category.id}>
                <Link
                  to={`/category/${category.category_name}`}
                >
                  <div className="text-3xl">{category.category_name}</div>
                  <CategoryImg
                    src={`${category.category_img_url}`}
                    alt="test"
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
