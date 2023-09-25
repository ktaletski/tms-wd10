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
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    reset();
    setClickCount((count) => ++count);
  };

  return (
    <button onClick={handleClick}>
      {clickCount > 5 ? "Слишком много ресетов, астанавитесь!" : "Ресет"}
    </button>
  );
};

export const Counter: FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const Component = count >= 3 ? "span" : "div";

  return (
    <Component>
      <IncrementButton count={count} increment={increment} />
      <br />
      <br />
      <ResetButton reset={reset} />
    </Component>
  );
};