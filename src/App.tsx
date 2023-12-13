import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Articles from "./pages/Articles";
import Books from "./pages/Books";
import Courses from "./pages/Courses";
import Newsletter from "./pages/Newsletter";
import Podcast from "./pages/Podcast";
import Login from "./pages/Login";
import Singup from "./pages/Singup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "podcast",
        element: <Podcast />,
      },
      {
        path: "log-in",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <Singup />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
