/**
 * This file is used for the in-class or in-slides demo's only.
 * It is not a part of the application.
 */

import { type FC, useState } from "react";

interface IncrementButtonProps {
  count: number;
  increment: () => void;
}

const IncrementButton: FC<IncrementButtonProps> = ({ count, increment }) => {
  return (
    <button onClick={increment}>
      <span>{`Current count is: ${count}`}</span>
      <br />
      <span>{`Click to increment`}</span>
    </button>
  );
};

interface ResetButtonProps {
  reset: () => void;
}

const ResetButton: FC<ResetButtonProps> = ({ reset }) => {
  return <button onClick={reset}>Reset</button>;
};

export const Counter: FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <IncrementButton count={count} increment={increment} />
      <br />
      <br />
      {count > 0 && <ResetButton reset={reset} />}
    </div>
  );
};
