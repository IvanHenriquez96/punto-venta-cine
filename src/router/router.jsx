import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LayoutPublic from "../Layouts/LayoutPublic";
import MiCuenta from "../pages/MiCuenta";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    children: [
      { index: true, element: <App /> },
      { path: "/account", element: <MiCuenta /> },
    ],
  },
]);
