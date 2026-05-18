// src/main.jsx
import React from "react"
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/layout.css";
import "./styles/responsive.css";
import "./styles/dark.css";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Providers from "./app/providers"
import App from "./app/App.jsx"

import "./styles/global.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </StrictMode>
);