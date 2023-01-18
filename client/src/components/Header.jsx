import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderNavContainer,
  HeaderNavUl,
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
        <Link to="/">
          <h1>LOGO</h1>
        </Link>
      </HeaderLogoContainer>

      <HeaderNavContainer>
        <HeaderNavUl>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </HeaderNavUl>
      </HeaderNavContainer>
    </HeaderContainer>
  );
}

export default Header;
