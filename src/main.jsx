import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GlobalLoader from "./components/GlobalLoader.jsx";
import { RouterProvider } from "react-router-dom";
import browserRouter from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalLoader>
      {" "}
      <RouterProvider router={browserRouter} />
    </GlobalLoader>
  </StrictMode>
);
