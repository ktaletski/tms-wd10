import { FC, PropsWithChildren, ReactNode } from "react";

import { useAppSelector } from "./store";

export const MainLayout: FC<PropsWithChildren<{ searchNode?: ReactNode }>> = ({
  searchNode,
  children,
}) => {
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
        {searchNode}
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
      <main style={{ height: "100%", minHeight: 0 }}>{children}</main>
    </div>
  );
};
