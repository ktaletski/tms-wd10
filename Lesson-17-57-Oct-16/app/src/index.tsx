import { type FC } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";

import "./index.css";

import { List } from "./List";
import { MainRouteLayout } from "./MainRouteLayout";

const Details: FC = () => {
  const params = useParams();
  return (
    <section>
      <p>Some beer details. Id: {params.id}</p>
    </section>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRouteLayout />,
    children: [
      {
        path: "/",
        element: <List />,
      },
      {
        path: "details/:id",
        element: <Details />,
      },
    ],
    errorElement: <h1>404 Page not found</h1>,
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(<App />);
