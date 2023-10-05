import { FC } from "react";

import { useCountdown } from "./use-countdown";

interface CountdownButtonProps {
  /** Value to count down from in seconds */
  countdownValue: number;
}

const CountdownButton: FC<CountdownButtonProps> = ({ countdownValue }) => {
  const { count, isCountingDown, start } = useCountdown(countdownValue);

  return (
    <button disabled={isCountingDown} onClick={start}>
      {isCountingDown ? `Cooldown in ${count} seconds` : "Reset"}
    </button>
  );
};

const CountDownInput = () => {
  const { count, isCountingDown, start } = useCountdown(2);

  return (
    <label>
      {isCountingDown ? `Wait for ${count} seconds` : "Type something"}
      <input disabled={isCountingDown} type="text" onChange={start} />
    </label>
  );
};

export const App: FC = () => {
  return (
    <>
      <CountdownButton countdownValue={3} />
      <br />
      <CountDownInput />
    </>
  );
};
