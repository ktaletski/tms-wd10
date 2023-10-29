import { type FC } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";

import { AuthGuard } from "./AuthGuard";
import { DetailsPage } from "./DetailsPage";
import { GlobalSearch, SearchPageInput } from "./features/search";
import { LoginPage } from "./LoginPage";
import { MainLayout } from "./MainLayout";
import { ProductsPage } from "./ProductsPage";
import { SearchPage } from "./SearchPage";
import { persistor, store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthGuard>
        <Outlet />
      </AuthGuard>
    ),
    children: [
      {
        path: "/",
        element: (
          <MainLayout searchNode={<GlobalSearch />}>
            <ProductsPage />
          </MainLayout>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <MainLayout searchNode={<GlobalSearch />}>
            <DetailsPage />,
          </MainLayout>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/search",
        element: (
          <MainLayout searchNode={<SearchPageInput />}>
            <SearchPage />
          </MainLayout>
        ),
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
      <PersistGate loading={"loading..."} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
};

root.render(<App />);
