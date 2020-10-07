import React from "react";

import { Container } from "./style";

const ContentDiscipline = ({ title, disciplines }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <ul>
        {disciplines.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </Container>
  );
};

export default ContentDiscipline;
