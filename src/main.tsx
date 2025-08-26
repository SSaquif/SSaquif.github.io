import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { SiteStateProvider } from "./context/SiteStateContext";
import HomeLayout from "./routes/HomeLayout.tsx";
import Portfolio from "./components/Portfolio/Portfolio.tsx";
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
    <SiteStateProvider>
      <RouterProvider router={router} />
    </SiteStateProvider>
  </StrictMode>
);
