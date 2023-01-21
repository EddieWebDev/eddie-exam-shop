import tw from "tailwind-styled-components";

export const StyledLogoutButton = tw.button`
    w-auto
    p-2
    rounded
    shadow
    bg-primary-darkgreen
    text-white
`;

export const Button = tw.button`
    w-auto
    p-2
    rounded
    shadow
    bg-primary-darkgreen
    text-white
`;

export const TableButton = tw.button`
    w-[35px]
    p-2
    rounded
    shadow
    bg-primary-darkgreen
    text-white
`;

export const DeleteButton = tw.button`
    min-w-[100px]
    p-2
    rounded
    shadow
    bg-red-600
    text-white
    hover:scale-110 hover:transition duration-300 cursor-pointer
`;
