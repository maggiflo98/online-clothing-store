import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.components";

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
      {/* switch will render homepage frst and not anthng  else */}

      {/* <HomePage /> */}
    </div>
  );
}
export default App;
