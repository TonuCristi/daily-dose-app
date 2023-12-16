import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const Root = lazy(() => import("./pages/Root"));
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Articles = lazy(() => import("./pages/Articles"));
const Books = lazy(() => import("./pages/Books"));
const Courses = lazy(() => import("./pages/Courses"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Article = lazy(() => import("./pages/Article"));

import Loader from "./components/Loader/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/:articleId",
        element: (
          <Suspense fallback={<Loader />}>
            <Article />
          </Suspense>
        ),
      },
      {
        path: "articles",
        element: (
          <Suspense fallback={<Loader />}>
            <Articles />
          </Suspense>
        ),
      },
      {
        path: "books",
        element: (
          <Suspense fallback={<Loader />}>
            <Books />
          </Suspense>
        ),
      },
      {
        path: "courses",
        element: (
          <Suspense fallback={<Loader />}>
            <Courses />
          </Suspense>
        ),
      },
      {
        path: "newsletter",
        element: (
          <Suspense fallback={<Loader />}>
            <Newsletter />
          </Suspense>
        ),
      },
      {
        path: "log-in",
        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "sign-up",
        element: (
          <Suspense fallback={<Loader />}>
            <Signup />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
