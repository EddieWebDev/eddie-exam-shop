import tw from "tailwind-styled-components";

export const HeaderContainer = tw.header`
    h-[150px]
    w-full
    bg-black
    flex
`

export const HeaderLogoContainer = tw.div`
    w-1/2
    h-1/2
    flex
    justify-center
    items-center
`

export const HeaderLogo = tw.h1`
    text-white
`

export const HeaderNavContainer = tw.nav`
    w-full
`

export const HeaderNavUl = tw.ul`
    h-1/2
    flex
    justify-around
    items-center
    text-white
`

export const HeaderNavLi = tw.li`
    hover:underline
`