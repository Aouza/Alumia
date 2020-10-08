import React, { useState, useCallback, useRef } from "react";
import axios from "axios";
import Button from "./Button";
import Input from "./Input";

import { Container } from "./style";
const EmailField = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      setLoading(true);
      await axios.post("http://localhost:3001/email-send", {
        email,
      });
      setLoading(false);
      setEmail("");
      formRef.current.reset();
    },
    [email]
  );

  return (
    <Container ref={formRef} onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Digite o seu melhor e-mail"
        name="email"
        id="email"
        onChange={({ target }) => setEmail(target.value)}
      />
      {loading ? (
        <Button disabled value="Enviando..." />
      ) : (
        <Button value="Enviar" />
      )}
    </Container>
  );
};

export default EmailField;
