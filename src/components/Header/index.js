import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { MdMenu, MdClose } from "react-icons/md";
import useMedia from "../../hooks/useMedia";
import LogoImage from "../../assets/images/alumia-logo-laranja.png";
import { menuItems } from "../../services/api";

import { Container, Logo, Menu, MenuButton } from "./style";

const Header = () => {
  const [mobileActive, setMobileActive] = useState(false);

  const isMobile = useMedia("(max-width: 900px)");

  return (
    <Container>
      <nav>
        <Logo
          src={LogoImage}
          alt="Alumia"
          onClick={() => scroll.scrollToTop()}
        />
        {isMobile && (
          <MenuButton
            mobileButton={mobileActive}
            type="button"
            onClick={() => setMobileActive(!mobileActive)}
          >
            {mobileActive ? <MdClose /> : <MdMenu />}
          </MenuButton>
        )}
        <Menu mobileButton={mobileActive} mobileWindow={isMobile}>
          {menuItems.map(({ value }) => (
            <li key={value}>
              <Link
                activeClass="active"
                to={value}
                spy={true}
                smooth={true}
                offset={-140}
                duration={500}
              >
                {value}
              </Link>
            </li>
          ))}
        </Menu>
      </nav>
    </Container>
  );
};

export default Header;
