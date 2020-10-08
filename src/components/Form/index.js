import React, { useState, useCallback, useRef } from "react";
import axios from "axios";
import Button from "../Form/Button";
import Input from "../Form/Input";

import { Container } from "./style";

const Form = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const formRef = useRef();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      setLoading(true);
      await axios.post("http://localhost:3001/email-name-send", {
        name,
        email,
      });
      setLoading(false);
      setName("");
      setEmail("");
      formRef.current.reset();
    },
    [name, email]
  );

  return (
    <Container ref={formRef} onSubmit={handleSubmit}>
      {children}
      <Input
        type="name"
        name="name"
        id="name"
        placeholder="Seu nome"
        onChange={({ target }) => setName(target.value)}
      />
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Seu email"
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

export default Form;
