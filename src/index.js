import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//provides us with all the functionality we need
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
