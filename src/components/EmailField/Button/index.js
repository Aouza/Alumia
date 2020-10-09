import React from "react";
import { Container } from "./style";

const Button = ({ value, loading }) => {
  return <Container loading={loading}>{value}</Container>;
};

export default Button;
