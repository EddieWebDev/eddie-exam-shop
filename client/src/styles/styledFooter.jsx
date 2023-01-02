import tw from "tailwind-styled-components";

export const FooterContainer = tw.footer`
    h-[300px]
    w-full
    bg-black
    flex
`;

export const FooterLogoContainer = tw.div`
    w-1/2
    flex
    justify-center
    items-center
`;

export const FooterLogo = tw.h1`
    text-white
`;

export const FooterNavContainer = tw.nav`
    w-full
    flex
    justify-center
    items-center
`;

export const FooterNavUl = tw.ul`
    h-1/2
    flex
    flex-col
    justify-around
    items-center
    text-white
`;

export const FooterNavLi = tw.li`
    hover:underline
`;
