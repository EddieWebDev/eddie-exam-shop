import tw from "tailwind-styled-components";

export const HeaderContainer = tw.header`
    h-36
    w-full
    items-center
    bg-primary-darkgreen
    flex
    text-white
    p-4
`

export const HeaderLogoContainer = tw.div`
    w-1/2
    flex
    justify-center
    items-center
`

export const HeaderNavContainer = tw.nav`
    w-1/2
`

export const HeaderNavUl = tw.ul`
    flex
    justify-around
    items-center
`