import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./scss/main.scss";

import App from "./components/app/app";

import { AuthContextProvider } from "./contexts/auth-context";
import { ModalContextProvider } from "./contexts/modal-context";

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
