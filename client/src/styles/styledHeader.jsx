import styled from 'styled-components';

export const HeaderContainer = styled.header.attrs({className: "header-container"})`
    height: 150px;
    width: 100%;
    background-color: black;
    display: flex;
`

export const HeaderLogoContainer = styled.div.attrs({className: "header-logo-container"})`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HeaderLogo = styled.h1.attrs({className: "header-logo"})`
    color: white;
`

export const HeaderNavContainer = styled.nav.attrs({className: "header-nav-container"})`
    width: 100%;
`

export const HeaderNavUl = styled.ul.attrs({className: "header-nav-ul"})`
    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    a {
        color: white;
    }
    
    a:visited {
        color: white;
    }
    
    a:hover {
        text-decoration: underline;
    }
`

export const HeaderNavLi = styled.li.attrs({className: "header-nav-li"})`
    color: white;
`