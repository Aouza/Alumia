import React, { useState, useCallback, useRef } from "react";
import { Form } from "@unform/web";
import { mailApi } from "../../services/api";
import * as Yup from "yup";
import Button from "../FormMail/Button";
import Input from "../FormMail/Input";

import { Container } from "./style";

const FormMail = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef();

  const handleSubmit = useCallback(async (data, { reset }) => {
    try {
      setLoading(true);
      const schema = Yup.object().shape({
        name: Yup.string().required("Como devemos te chamar?"),
        email: Yup.string()
          .email("Nos envie um e-mail válido")
          .required("Qual é o seu melhor e-mail?"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await mailApi.post("email-name-send", {
        name: data.name,
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
        <h3>Fique por dentro</h3>
        <p>
          Você não pode ficar de fora das nossas promoções, dicas e novidades.{" "}
          <br />
          Queremos estar cada vez mais perto de você!
        </p>
        <Input type="name" name="name" placeholder="Seu nome" />
        <Input type="text" name="email" placeholder="Seu e-mail" />
        {loading ? (
          <Button disabled value="Enviando..." />
        ) : (
          <Button value="Enviar" />
        )}
      </Form>
    </Container>
  );
};

export default FormMail;
