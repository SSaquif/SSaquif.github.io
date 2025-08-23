import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomeLayout from "./routes/HomeLayout.tsx";
import Portfolio from "./components/Portfolio.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "./routes/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Notfound />,
    children: [
      {
        index: true,
        element: <Portfolio />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
