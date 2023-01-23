import tw from "tailwind-styled-components";

export const FooterContainer = tw.footer`
    h-52
    w-full
    bg-primary-darkgreen
    flex
    mt-auto
    text-white
    p-4
`;

export const FooterLogoContainer = tw.div`
    w-1/2
    min-w-[200px]
    flex
    justify-center
    items-center
`;

export const FooterNavContainer = tw.nav`
    w-1/2
`;

export const FooterNavUl = tw.ul`
    h-full
    flex
    flex-col
    justify-center
    items-center
    gap-4
`;
