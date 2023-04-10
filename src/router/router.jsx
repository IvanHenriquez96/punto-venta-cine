import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LayoutPublic from "../Layouts/LayoutPublic";
import InfoMovie from "../pages/InfoMovie";
import MiCuenta from "../pages/MiCuenta";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <App /> },

      { path: "/movie/:id", element: <InfoMovie /> },
      { path: "/account", element: <MiCuenta /> },
    ],
  },
]);
