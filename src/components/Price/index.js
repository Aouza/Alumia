import React from "react";
import EmailField from "../EmailField";

import { Container } from "./style";

const Price = ({ children }) => {
  return (
    <Container>
      {children}
      <h3>Plante aqui seu e-mail para colher um desconto.</h3>
      <p>
        Cadastre seu e-mail para receber um desconto especial!
        <br />
        Desfrute de todo o conhecimento.
      </p>
      <EmailField />
    </Container>
  );
};

export default Price;
