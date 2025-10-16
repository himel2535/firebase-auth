import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./layout/Root";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import AuthProvider from "./contexts/AuthContext/AuthProvider";
import Orders from "./Orders/Orders";
import Profile from "./Profile/Profile";
import PrivateRouter from "./Routes/PrivateRouter";
import Dashboard from "./Dashboard/Dashboard";

// --Routing---
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/orders",
        element: (
          <PrivateRouter>
            <Orders></Orders>
          </PrivateRouter>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile></Profile>
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRouter>
            <Dashboard></Dashboard>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
