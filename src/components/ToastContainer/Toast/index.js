import React, { useEffect } from "react";
import { MdMood, MdSentimentVeryDissatisfied, MdClose } from "react-icons/md";
import { Container } from "./style";

import { useToast } from "../../../context/ToastContext";

const Toast = ({ message }) => {
  const { removeToast } = useToast();

  const icons = {
    success: <MdMood size={20} />,
    error: <MdSentimentVeryDissatisfied size={20} />,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container type={message.type}>
      {icons[message.type]}

      <div>
        <h3>{message.title}</h3>
        <p>{message.description}</p>
      </div>

      <button type="button" onClick={() => removeToast(message.id)}>
        <MdClose />
      </button>
    </Container>
  );
};

export default Toast;
