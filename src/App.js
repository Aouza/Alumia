import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Main from "./pages/Main";

import { GlobalStyle } from "./styles/GlobalStyle";
import { ToastProvider } from "./context/ToastContext";

function App() {
  return (
    <>
      <ToastProvider>
        <Header />
        <Main />
        <Footer />
      </ToastProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
