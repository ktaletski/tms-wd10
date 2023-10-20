import { FC } from "react";
import { Outlet } from "react-router-dom";

import { useAppSelector } from "./store";

export const MainLayout: FC = () => {
  const profile = useAppSelector((state) => state.user.profile);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateRows: "min-content auto",
        rowGap: "16px",
      }}
    >
      <header>
        <h1 style={{ margin: "unset", padding: "16px" }}>My App</h1>
        {profile && (
          <div>
            <span>{profile.firstName}</span> <span>{profile.lastName}</span>
            {profile.image && (
              <img
                src={profile.image}
                style={{ height: "40px" }}
                alt="your avatar"
              />
            )}
          </div>
        )}
      </header>
      <main style={{ height: "100%", minHeight: 0 }}>
        <Outlet />
      </main>
    </div>
  );
};
