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
        path: "dashboard",
        element: <IndexPage />,
      },
    ],
  },
]);

export default router;
