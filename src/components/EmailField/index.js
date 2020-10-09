import React, { useState, useCallback, useRef } from "react";
import { mailApi } from "../../services/api";
import { Form } from "@unform/web";
import * as Yup from "yup";
import Button from "./Button";
import Input from "./Input";
import { useToast } from "../../context/ToastContext";

import { Container } from "./style";
const EmailField = () => {
  const [loading, setLoading] = useState(false);
  const [focus, setFocus] = useState(false);
  const formRef = useRef();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data, { reset }) => {
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

        addToast({
          type: "success",
          title: "E-mail enviado!",
          description: "Obrigado.",
        });
        formRef.current.setErrors({});
        reset();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errorMessages = {};

          err.inner.forEach((error) => {
            errorMessages[error.path] = error.message;
          });

          formRef.current.setErrors(errorMessages);
        }

        addToast({
          type: "error",
          title: "Ocorreu um erro!",
          description: "Verifique os dados.",
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast]
  );

  return (
    <Container>
      <Form focus={focus ? 1 : undefined} ref={formRef} onSubmit={handleSubmit}>
        <Input
          type="text"
          name="email"
          placeholder="Digite o seu melhor e-mail"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {loading ? (
          <Button
            loading={loading ? 1 : undefined}
            disabled
            value="Enviando..."
          />
        ) : (
          <Button value="Enviar" />
        )}
      </Form>
    </Container>
  );
};

export default EmailField;
