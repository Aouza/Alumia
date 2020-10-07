import React from "react";

import { Container } from "./style";
const Input = ({ type, placeholder, name, id, ...props }) => {
  return (
    <Container
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      {...props}
    />
  );
};

export default Input;
