import React from "react";

import { Container } from "./style";

const Input = ({ type, name, id, placeholder, ...props }) => {
  return (
    <Container
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
