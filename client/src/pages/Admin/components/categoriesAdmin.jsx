import { CreateCategoryForm } from "./categoryAdminComponents/createCategoryForm";
import { ShowCategories } from "./categoryAdminComponents/showCategories";

import { AdminContainer } from "../../../styles/styledAdmin";

export const CategoriesAdmin = () => {
  return (
    <div className="flex flex-wrap gap-8">
      <AdminContainer>
        <CreateCategoryForm />
      </AdminContainer>
      <AdminContainer>
        <ShowCategories />
      </AdminContainer>
    </div>
  );
};
