import { FC, PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAppSelector } from "./store";
import { USER_SLICE_NAME } from "./store/user";

export const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();

  const isLoggedIn = useAppSelector(
    (state) => state[USER_SLICE_NAME].isLoggedIn,
  );

  const isOnLoginPage = location.pathname === "/login";
  const needRedirect = !isLoggedIn && !isOnLoginPage;

  return (
    <>
      {needRedirect && <Navigate to="/login" />}
      {children}
    </>
  );
};
