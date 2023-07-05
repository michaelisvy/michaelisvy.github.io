import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "../styles/Main.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SessionList, SessionDetail, ErrorPage } from "./index.ts";
import { ClimateFresk } from "./index.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "sessions",
        element: <SessionList />,
      },
      {
        path: "sessions/:sessionId",
        element: <SessionDetail />,
      },

      {
        path: "climateFresk",
        element: <ClimateFresk />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div id="mainContainer">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
