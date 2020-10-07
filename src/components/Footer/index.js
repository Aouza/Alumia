import React from "react";
import EmailField from "../EmailField";
import LogoImageFooter from "../../assets/images/alumia-logo-branco.png";

import { menuItems } from "../../services/api";

import {
  Container,
  Wrapper,
  LogoFooter,
  MenuFooter,
  InfosFooter,
} from "./style";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LogoFooter src={LogoImageFooter} alt="Alumia" />
        <MenuFooter>
          <h3>MENU</h3>
          {menuItems.map(({ value }) => (
            <li key={value}>
              <a href="!#">{value}</a>
            </li>
          ))}
        </MenuFooter>
        <InfosFooter>
          <h3>ENDEREÇO</h3>
          <p>Av. Brg. Faria Lima, 3477 - Itaim Bibi, São Paulo - SP</p>

          <h3>TELEFONE</h3>
          <p>
            <small>11 </small>3333-3333
          </p>
        </InfosFooter>
        <EmailField />
      </Wrapper>
    </Container>
  );
};

export default Footer;
