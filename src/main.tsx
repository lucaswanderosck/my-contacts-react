import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { GlobalStyles } from "./styles/GlobalStyles.ts";
import colors from "./styles/Colors.ts";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
