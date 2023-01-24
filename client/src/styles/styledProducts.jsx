import tw from "tailwind-styled-components";

export const ProductsContainer = tw.div`
    flex
    flex-wrap
    gap-8
    my-4
`;
export const ProductContainer = tw.div`
    flex
    flex-col
    p-2
    border-4
    border-primary-darkgreen
    bg-primary-darkbeige
    items-center
    text-center
`;
export const ProductImg = tw.img`
    my-4
    w-96
    h-56
    object-contain
`;
