import { useDeleteCategory } from "../../../../queries/categories/hooks/useDeleteCategory";
import { useGetAllCategories } from "../../../../queries/categories/hooks/useGetAllCategories";
import {
  AdminTable,
  TableTheadTr,
  TableTheadTd,
  TableTbodyTr,
  TableTbodyTd,
} from "../../../../styles/styledTable";
import { DeleteButtonSmall } from "../../../../styles/styledButtons";

export const ShowCategories = () => {
  const {
    data: categories,
    isInitialLoading,
    isError: isCategoriesError,
    error: categoriesError,
  } = useGetAllCategories();

  const { mutate, isSuccess, isLoading, isError, error } = useDeleteCategory();

  const handleDeleteCategory = (id) => {
    mutate(id);
  };

  if (isInitialLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (isCategoriesError) {
    return <div className="text-center">{categoriesError.message}</div>;
  }

  return (
    <div>
      <div className="w-full text-center text-white bg-primary-green">
        <h5>Categories</h5>
      </div>
      <div className="flex flex-col px-2">
        {categories && (
          <AdminTable>
            <thead>
              <TableTheadTr>
                <TableTheadTd>Id</TableTheadTd>
                <TableTheadTd>Name</TableTheadTd>
                <TableTheadTd>Url</TableTheadTd>
                <TableTheadTd />
              </TableTheadTr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <TableTbodyTr key={category.id}>
                  <TableTbodyTd>{category.id}</TableTbodyTd>
                  <TableTbodyTd>{category.category_name}</TableTbodyTd>
                  <TableTbodyTd className="max-w-[120px] overflow-auto">
                    {category.category_img_url}
                  </TableTbodyTd>
                  <TableTbodyTd className="text-right">
                    <DeleteButtonSmall
                      onClick={() => handleDeleteCategory(category.id)}
                    >
                      Delete
                    </DeleteButtonSmall>
                  </TableTbodyTd>
                </TableTbodyTr>
              ))}
            </tbody>
          </AdminTable>
        )}
        {isSuccess && <h5 className="mt-4">Category deleted</h5>}
        {isLoading && <h5 className="mt-4">Loading...</h5>}
        {isError && <h5 className="mt-4">{error.message}</h5>}
      </div>
    </div>
  );
};
