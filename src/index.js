// import React from "react";
// import ReactDom from "react-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "src/components/App";
import store from "src/store";

const rootReactElement = (
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(rootReactElement);
