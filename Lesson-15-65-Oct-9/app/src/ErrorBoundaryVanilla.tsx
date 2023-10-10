import { FC } from "react";

const ErroredComponent: FC = () => {
  throw new Error("Component crashed");
  return <h3>This component will crash!</h3>;
};

export const App: FC = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <ErroredComponent />
    </div>
  );
};
