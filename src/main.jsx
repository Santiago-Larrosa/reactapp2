import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./root/root";
import App from "./root/App";
import Comentarios from "./root/comentarios";
import Coment from "./root/coment";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/App",
    element: <App />,
  },
  {
    path: "/comentarios",
    element: <Comentarios />,
  },
  {
    path: "/coment/:id", // Define un parámetro en la ruta
    element: <Coment />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
