import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderNavContainer,
  HeaderNavUl,
  HamburgerButton,
  HamburgerNavContainer,
} from "../styles/styledHeader";
import { useCheckToken } from "../queries/auth/hooks/useCheckToken";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";
import { GiHamburgerMenu, GiShoppingCart } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";

function Header() {
  const [hamburger, setHamburger] = useState("hidden");

  const { mutate } = useCheckToken();

  useEffect(() => {
    mutate();
  }, [mutate]);

  const { user } = useContext(UserContext);
  const { totalQtyCart } = useContext(CartContext);

  const total = totalQtyCart();

  const handleHamburgerClick = () => {
    if (hamburger === "hidden") {
      setHamburger("");
    } else {
      setHamburger("hidden");
    }
  };

  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <Link to="/">
          <h1>Fruit City</h1>
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
            <Link className="flex gap-1" to="/cart">
              Cart
              {total === 0 ? "" : <p>&#40;{total}&#41;</p>}
            </Link>
          </li>
          {user && user.role === "admin" && (
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          )}
        </HeaderNavUl>
        <HamburgerButton onClick={() => handleHamburgerClick()}>
          {hamburger === "hidden" ? <GiHamburgerMenu /> : <ImCross />}
          <HamburgerNavContainer className={`${hamburger} `}>
            <ul className="flex flex-col items-center gap-8 text-2xl">
              <li>
                <Link className="flex gap-1" to="/cart">
                  <GiShoppingCart className="text-4xl" />
                  {total === 0 ? "" : <p>&#40;{total}&#41;</p>}
                </Link>
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
              {user && user.role === "admin" && (
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
              )}
            </ul>
          </HamburgerNavContainer>
        </HamburgerButton>
      </HeaderNavContainer>
    </HeaderContainer>
  );
}

export default Header;
