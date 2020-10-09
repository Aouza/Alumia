import React from "react";
import Toast from "./Toast";

import { Container } from "./style";

const ToastContainer = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
