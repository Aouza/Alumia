import React from "react";
import Button from "../Form/Button";
import Input from "../Form/Input";

import { Container } from "./style";

const Form = ({ children }) => {
  return (
    <Container>
      {children}
      <Input type="name" name="name" id="name" placeholder="Seu nome" />
      <Input type="email" name="email" id="email" placeholder="Seu email" />
      <Button value="Enviar" />
    </Container>
  );
};

export default Form;
