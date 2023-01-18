import { Link } from "react-router-dom";
import {
  FooterContainer,
  FooterLogoContainer,
  FooterNavContainer,
  FooterNavUl,
} from "../styles/styledFooter";

function Footer() {
  return (
    <FooterContainer>
      <FooterNavContainer>
        <FooterNavUl>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </FooterNavUl>
      </FooterNavContainer>

      <FooterLogoContainer>
        <Link to="/">
          <h1>LOGO</h1>
        </Link>
      </FooterLogoContainer>
    </FooterContainer>
  );
}

export default Footer;
