import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.components";
import ShopPage from "./pages/shop/shop.component";
import SigninAndSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sign-up.component";
import Header from "../src/components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SigninAndSignUpPage} />
      </Switch>
      {/* switch will render homepage frst and not anthng  else */}

      {/* <HomePage /> */}
    </div>
  );
}
export default App;
