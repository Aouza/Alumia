import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";

import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
