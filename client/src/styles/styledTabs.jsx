import tw from "tailwind-styled-components";

export const TabContainer = tw.div`
    flex
    text-white
    bg-primary-green
    p-4
    my-4
`;

export const StyledTabUl = tw.ul`
    flex
    gap-6
`;

export const StyledTab = tw.li`
    border-b
    hover: cursor-pointer
`;
