import styled from 'styled-components';

export const FooterContainer = styled.footer.attrs({className: "footer-container"})`
    height: 300px;
    width: 100%;
    background-color: black;
    display: flex;
`

export const FooterLogoContainer = styled.div.attrs({className: "Footer-logo-container"})`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterLogo = styled.h1.attrs({className: "footer-logo"})`
    color: white;
`

export const FooterNavContainer = styled.nav.attrs({className: "footer-nav-container"})`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterNavUl = styled.ul.attrs({className: "Footer-nav-ul"})`
    height: 50%;
    display: flex;
    flex-direction: column;
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

export const FooterNavLi = styled.li.attrs({className: "footer-nav-li"})`
    color: white;
`