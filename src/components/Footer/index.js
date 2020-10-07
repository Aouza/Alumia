import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import EmailField from "../EmailField";
import LogoImageFooter from "../../assets/images/alumia-logo-branco.png";

import { menuItems } from "../../services/api";

import {
  Container,
  Wrapper,
  LogoFooter,
  MenuFooter,
  InfosFooter,
  EndPage,
} from "./style";

const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <LogoFooter
            src={LogoImageFooter}
            alt="Alumia"
            onClick={() => scroll.scrollToTop()}
          />
          <MenuFooter>
            <h3>MENU</h3>
            {menuItems.map(({ value }) => (
              <li key={value}>
                <Link
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
          </MenuFooter>
          <InfosFooter>
            <h3>ENDEREÇO</h3>
            <p>Av. Brg. Faria Lima, 3477 - Itaim Bibi, São Paulo - SP</p>

            <h3>EMAIL</h3>
            <p>alison-cruz@hotmail.com</p>

            <h3>TELEFONE</h3>
            <p>
              <small>11 </small>97797-5522
            </p>
          </InfosFooter>
          <EmailField />
        </Wrapper>
      </Container>

      <EndPage>
        <p>Desenvolvido por Alison Souza</p>
      </EndPage>
    </>
  );
};

export default Footer;
