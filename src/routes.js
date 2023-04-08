import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/root";
import IndexPage from "./pages/Index/IndexPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <IndexPage title="Dashboard" />,
      },
      {
        path: "dashboard",
        element: <h1>Dashboard</h1>,
      },
    ],
  },
]);

export default router;
