import {Link} from 'react-router-dom'
import {FooterContainer, FooterLogoContainer, FooterLogo, FooterNavContainer, FooterNavUl, FooterNavLi} from "../styles/styledFooter"

function Footer() {
    return(
        <FooterContainer>
            
            <FooterNavContainer>
                <FooterNavUl>
                    <FooterNavLi>
                        <Link to ="/">Home</Link>
                    </FooterNavLi>
                    <FooterNavLi>
                        <Link to ="/about">About</Link>
                    </FooterNavLi>
                    <FooterNavLi>
                        <Link to ="/products">Products</Link>
                    </FooterNavLi>
                    <FooterNavLi>
                        <Link to ="/product">Product</Link>
                    </FooterNavLi>
                    <FooterNavLi>
                        <Link to ="/admin">Admin</Link>
                    </FooterNavLi>
                    <FooterNavLi>
                        <Link to ="/login">Login</Link>
                    </FooterNavLi>
                </FooterNavUl>
            </FooterNavContainer>

            <FooterLogoContainer>
                <Link to ="/">
                    <FooterLogo>
                        LOGO
                    </FooterLogo>
                </Link>
            </FooterLogoContainer>

        </FooterContainer>
    )
}

export default Footer