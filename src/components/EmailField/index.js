import React from "react";
import Button from "./Button";
import Input from "./Input";

import { Container } from "./style";
const EmailField = () => {
  return (
    <Container>
      <Input
        type="email"
        placeholder="Digite o seu melhor e-mail"
        name="email"
        id="email"
      />
      <Button value="Enviar" />
    </Container>
  );
};

export default EmailField;
