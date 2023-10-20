import { type FC } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { DetailsPage } from "./DetailsPage";
// import { ListPage } from "./ListPage";
import { LoginPage } from "./LoginPage";
import { MainLayout } from "./MainLayout";
import { ProductsPage } from "./ProductsPage";
import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "/details/:id",
        element: <DetailsPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const App: FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

root.render(<App />);
