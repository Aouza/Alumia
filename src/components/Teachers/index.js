import React from "react";
import { Container } from "./style";

const Teachers = ({ name, photo }) => {
  return (
    <Container>
      <img src={photo} alt={name} />
      <span>Mentor</span>
      <h3>{name}</h3>
    </Container>
  );
};

export default Teachers;
