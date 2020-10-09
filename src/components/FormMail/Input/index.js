import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { Container } from "./style";
import ErrorMessage from "../../ErrorMessage";

const Input = ({ name, ...props }) => {
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const inputRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container ref={inputRef} {...props} />
      <ErrorMessage>{error && error}</ErrorMessage>
    </>
  );
};

export default Input;
