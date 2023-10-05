import { FC, useState } from "react";

const Counter: FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <p>Count is {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export const Component: FC = () => {
  const [isDiv, setIsDiv] = useState(true);

  const toggleElementType = () => {
    setIsDiv((prev) => !prev);
  };

  const ComponentToRender = isDiv ? "div" : "p";

  return (
    <ComponentToRender>
      <h1>Counter</h1>
      <Counter />
      <button onClick={toggleElementType}>🪄</button>
    </ComponentToRender>
  );
};
