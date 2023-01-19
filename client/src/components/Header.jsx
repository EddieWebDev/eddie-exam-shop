import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderNavContainer,
  HeaderNavUl,
} from "../styles/styledHeader";
import { useCheckToken } from "../queries/auth/hooks/useCheckToken";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Header() {
  const { mutate } = useCheckToken();

  useEffect(() => {
    mutate();
  }, [mutate]);

  const { user } = useContext(UserContext);

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
            {user ? (
              <Link to={`/user/${user.id}`}>Profile</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          {(user && user.role === "admin") &&
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          }
        </HeaderNavUl>
      </HeaderNavContainer>
    </HeaderContainer>
  );
}

export default Header;
