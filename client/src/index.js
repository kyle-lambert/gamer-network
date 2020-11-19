import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./scss/main.scss";

import App from "./components/app/app";

import { ModalContextProvider } from "./contexts/modal-context";

ReactDOM.render(
  <BrowserRouter>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
