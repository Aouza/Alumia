import React, { useState, useCallback } from "react";
import axios from "axios";
import Button from "./Button";
import Input from "./Input";

import { Container } from "./style";
const EmailField = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      await axios.post("http://localhost:3001/email-send", {
        email,
      });
    },
    [email]
  );

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Digite o seu melhor e-mail"
        name="email"
        id="email"
        onChange={({ target }) => setEmail(target.value)}
      />
      <Button value="Enviar" />
    </Container>
  );
};

export default EmailField;
