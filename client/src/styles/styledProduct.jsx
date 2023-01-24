import tw from "tailwind-styled-components";

export const SingleProductContainer = tw.div`
    flex
    flex-col
    p-2
    my-4
    border-4
    border-primary-darkgreen
    bg-primary-darkbeige
    items-center
`;

export const SingleProductImg = tw.img`
    w-96
    h-56
    my-4
    object-contain
`;

export const SingleProductInfoContainer = tw.div`
   flex
   flex-col
   items-left
   justify-center
   gap-4
   max-w-sm
`;
