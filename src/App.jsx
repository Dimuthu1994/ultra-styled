import React from "react";
import GlobalStyle from "./globalStyles";
import { Navbar } from "./components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
