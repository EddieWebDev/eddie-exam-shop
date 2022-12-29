import {Link} from 'react-router-dom'
import {FooterContainer, FooterLogoContainer, FooterLogo, FooterNavContainer, FooterNavUl, FooterNavLi} from "../styles/styledFooter"

function Footer() {
    return(
        <FooterContainer>
            
            <FooterNavContainer>
                <FooterNavUl>
                    <FooterNavLi>
                        <Link className='footer-nav-link' to ="/">Home</Link>
                    </FooterNavLi>
                    <FooterNavLi>
                        <Link className='footer-nav-link' to ="/about">About</Link>
                    </FooterNavLi>
                    <FooterNavLi>
                        <Link className='footer-nav-link' to ="/products">Products</Link>
                    </FooterNavLi>
                    <FooterNavLi>
                        <Link className='footer-nav-link' to ="/product">Product</Link>
                    </FooterNavLi>
                    <FooterNavLi>
                        <Link className='footer-nav-link' to ="/admin">Admin</Link>
                    </FooterNavLi>
                    <FooterNavLi>
                        <Link className='footer-nav-link' to ="/login">Login</Link>
                    </FooterNavLi>
                </FooterNavUl>
            </FooterNavContainer>

            <FooterLogoContainer>
                <Link className='footer-logo-link' to ="/">
                    <FooterLogo>
                        LOGO
                    </FooterLogo>
                </Link>
            </FooterLogoContainer>

        </FooterContainer>
    )
}

export default Footer