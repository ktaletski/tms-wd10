import { FC } from "react";
import { Outlet } from "react-router-dom";

export const MainLayout: FC = () => {
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
      <h1 style={{ margin: "unset", padding: "16px" }}>My App</h1>
      <main style={{ height: "100%", minHeight: 0 }}>
        <Outlet />
      </main>
    </div>
  );
};
