import React from "react";
import GlobalStyle from "./globalStyles";
import { Navbar } from "./components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
