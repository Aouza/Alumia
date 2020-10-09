import React, { useState, useCallback, useRef } from "react";
import { mailApi } from "../../services/api";
import { Form } from "@unform/web";
import * as Yup from "yup";
import Button from "./Button";
import Input from "./Input";

import { Container } from "./style";
const EmailField = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleSubmit = useCallback(async (data, { reset }) => {
    try {
      setLoading(true);
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Nos envie um e-mail válido")
          .required("Qual é o seu melhor e-mail?"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await mailApi.post("email-send", {
        email: data.email,
      });

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          type="text"
          name="email"
          placeholder="Digite o seu melhor e-mail"
        />
        {loading ? (
          <Button disabled value="Enviando..." />
        ) : (
          <Button value="Enviar" />
        )}
      </Form>
    </Container>
  );
};

export default EmailField;
