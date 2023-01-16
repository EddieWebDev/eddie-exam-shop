import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLogo,
  HeaderNavContainer,
  HeaderNavUl,
  HeaderNavLi,
} from "../styles/styledHeader";
import { useCheckToken } from "../queries/auth/hooks/useCheckToken";
import { useEffect } from "react";

function Header() {
  const { mutate } = useCheckToken();

  useEffect(() => {
    mutate();
  }, []);

  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <Link className="logo-link" to="/">
          <HeaderLogo>LOGO</HeaderLogo>
        </Link>
      </HeaderLogoContainer>

      <HeaderNavContainer>
        <HeaderNavUl>
          <HeaderNavLi>
            <Link to="/">Home</Link>
          </HeaderNavLi>
          <HeaderNavLi>
            <Link to="/about">About</Link>
          </HeaderNavLi>
          <HeaderNavLi>
            <Link to="/products">Products</Link>
          </HeaderNavLi>
          <HeaderNavLi>
            <Link to="/categories">Categories</Link>
          </HeaderNavLi>
          <HeaderNavLi>
            <Link to="/admin">Admin</Link>
          </HeaderNavLi>
          <HeaderNavLi>
            <Link to="/login">Login</Link>
          </HeaderNavLi>
          <HeaderNavLi>
            <Link to="/cart">Cart</Link>
          </HeaderNavLi>
          <HeaderNavLi>
            <Link to="/checkout">Checkout</Link>
          </HeaderNavLi>
        </HeaderNavUl>
      </HeaderNavContainer>
    </HeaderContainer>
  );
}

export default Header;
