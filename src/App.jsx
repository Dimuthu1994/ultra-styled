import React from "react";
import GlobalStyle from "./globalStyles";
import { Footer, Navbar } from "./components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import Signup from "./pages/SignUp/Signup";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={Signup} />
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
