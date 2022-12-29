import {Link} from 'react-router-dom'
import {HeaderContainer, HeaderLogoContainer, HeaderLogo, HeaderNavContainer, HeaderNavUl, HeaderNavLi} from "../styles/styledHeader"

function Header() {
    return (
        <HeaderContainer>

            <HeaderLogoContainer>
                <Link className='logo-link' to ="/">
                    <HeaderLogo>
                        LOGO
                    </HeaderLogo>
                </Link>
            </HeaderLogoContainer>
            
            <HeaderNavContainer>
                <HeaderNavUl>
                    <HeaderNavLi>
                        <Link className='nav-link' to ="/">Home</Link>
                    </HeaderNavLi>
                    <HeaderNavLi>
                        <Link className='nav-link' to ="/about">About</Link>
                    </HeaderNavLi>
                    <HeaderNavLi>
                        <Link className='nav-link' to ="/products">Products</Link>
                    </HeaderNavLi>
                    <HeaderNavLi>
                        <Link className='nav-link' to ="/product">Product</Link>
                    </HeaderNavLi>
                    <HeaderNavLi>
                        <Link className='header-nav-link' to ="/admin">Admin</Link>
                    </HeaderNavLi>
                    <HeaderNavLi>
                        <Link className='header-nav-link' to ="/login">Login</Link>
                    </HeaderNavLi>
                </HeaderNavUl>
            </HeaderNavContainer>

        </HeaderContainer>
    )
}

export default Header