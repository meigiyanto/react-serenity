import {
	RouterProvider,
	createBrowserRouter
} from "react-router-dom";

import { useAuth } from "../provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";

import Login from "../pages/auth/Login";
import Logout from "../pages/auth/Logout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";

const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: "/about-us",
      element: <About />,
    },
    {
      path: "/service",
      element: <Services />,
    }
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <div>User Profile</div>,
        },
        {
          path: "/logout",
          element: <Logout />,
        },
      ],
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
