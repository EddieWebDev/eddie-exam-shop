import tw from "tailwind-styled-components";

export const CategoriesContainer = tw.div`
    flex
    flex-wrap
    gap-8
    my-4
`;
export const CategoryContainer = tw.div`
    flex
    p-2
    border-4
    border-primary-darkgreen
    bg-primary-darkbeige
    justify-center
    text-center
`;
export const CategoryImg = tw.img`
    w-96
    my-4
    h-56
    object-contain
`;
