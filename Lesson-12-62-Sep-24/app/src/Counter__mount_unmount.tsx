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
  title: string;
  reset: () => void;
}

const ResetButton: FC<ResetButtonProps> = ({ title, reset }) => {
  return <button onClick={reset}>{title}</button>;
};

const TITLE_BY_STATE = {
  ready: "Reset",
  cooldown: "Please, wait to reset",
};

export const Counter: FC = () => {
  const [count, setCount] = useState(0);
  const [resetState, setResetState] = useState<"ready" | "cooldown">("ready");

  const increment = () => {
    setCount((c) => c + 1);
  };

  const reset = () => {
    if (resetState !== "ready") {
      return;
    }

    setCount(0);
    setResetState("cooldown");

    setTimeout(() => {
      setResetState("ready");
    }, 2000);
  };

  return (
    <div>
      <IncrementButton count={count} increment={increment} />
      <br />
      <br />
      {count > 0 && (
        <ResetButton title={TITLE_BY_STATE[resetState]} reset={reset} />
      )}
    </div>
  );
};
