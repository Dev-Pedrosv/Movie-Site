import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import { GlobalStyle } from "./assets/styles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
