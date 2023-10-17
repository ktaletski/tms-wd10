import { type FC } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { DetailsPage } from "./DetailsPage";
import { ListPage } from "./ListPage";
import { MainLayout } from "./MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <ListPage />,
      },
      {
        path: "/details/:id",
        element: <DetailsPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

root.render(<App />);
