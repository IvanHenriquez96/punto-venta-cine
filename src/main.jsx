import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CartProvider from "./context/cartContext";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
