import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <span>
      Current count is {count}{" "}
      <button
        onClick={() => {
          setCount((count) => ++count);
        }}
      >
        Increment
      </button>
    </span>
  );
};

export const Component = () => {
  const [dynamicKey, setDynamicKey] = useState("initial_value");

  return (
    <div>
      <Counter key={dynamicKey} />
      <br />
      {/**
       * Какие этапы жизненного цикла пройдёт Counter, когда
       * пользователь нажмёт на кнопку?
       */}
      <button onClick={() => setDynamicKey(getRandomString())}>🪄</button>
    </div>
  );
};

function getRandomString() {
  return `${Math.floor(Math.random() * 1000000)}`;
}
