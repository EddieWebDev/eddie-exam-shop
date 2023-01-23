import tw from "tailwind-styled-components";

export const HeaderContainer = tw.header`
    h-36
    w-full
    items-center
    bg-primary-darkgreen
    flex
    text-white
    p-4
`;

export const HeaderLogoContainer = tw.div`
    w-1/2
    min-w-[200px]
    flex
    justify-center
    items-center
`;

export const HeaderNavContainer = tw.nav`
    w-1/2
`;

export const HeaderNavUl = tw.ul`
    hidden
    md:flex
    justify-around
    items-center
`;

export const HamburgerButton = tw.button`
    md:hidden
    float-right
    text-5xl
`;

export const HamburgerNavContainer = tw.div`
    w-1/2 
    h-1/2 
    absolute 
    right-0 
    bg-primary-darkgreen 
    rounded-xl 
    flex 
    justify-center 
    items-center
    p-4
`;
