import { FC } from "react";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
  useParams,
} from "react-router-dom";

const FactPage: FC = () => {
  const { factId } = useParams();

  if (!factId) {
    return <h1>This page does not exist</h1>;
  }

  return (
    <>
      <Link to="/">
        <button>Go back to home page</button>
      </Link>
      <div>
        <h1>Fact with id "{factId}"</h1>
      </div>
    </>
  );
};

const CartPage: FC = () => {
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Home page</h1>
        <ul>
          <li>
            <Link to={"/fact/1"}>
              <button>Fact 1</button>
            </Link>
          </li>
          <li>
            <Link to={"/fact/2"}>
              <button>Fact 2</button>
            </Link>
          </li>
          <li>
            <Link to={"/fact/3"}>
              <button>Fact 3</button>
            </Link>
          </li>
        </ul>
      </div>
    ),
    children: [],
  },
  {
    path: "/fact/:factId",
    element: <FactPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

export const App: FC = () => {
  return <RouterProvider router={router} />;
};
