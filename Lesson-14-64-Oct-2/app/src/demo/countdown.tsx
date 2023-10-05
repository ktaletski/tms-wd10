import { FC, useCallback, useEffect, useRef, useState } from "react";

interface UseCountdownState {
  isOver: boolean;
  count: number;
}
interface UseCountdownHelpers {
  start: () => void;
}
type UseCountdownApi = [UseCountdownState, UseCountdownHelpers];

export const useCountdown = (initialCount = 60): UseCountdownApi => {
  const [count, setCount] = useState(initialCount);
  const [isOver, setIsOver] = useState(true);

  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const start = useCallback(() => {
    setIsOver(false);
    setCount(initialCount);

    timerRef.current = setInterval(() => {
      setCount((prevState) => {
        if (prevState === 0) {
          clearInterval(timerRef.current);
          setIsOver(true);
          return 0;
        }

        return prevState - 1;
      });
    }, 1000);
  }, [initialCount]);

  useEffect(() => () => clearInterval(timerRef.current), []);

  return [{ isOver, count }, { start }];
};

export const App: FC = () => {
  const [{ isOver, count }, { start }] = useCountdown(45);

  return (
    <main>
      <h1>Counting down: {count}</h1>
      <button onClick={start} disabled={!isOver}>
        Start
      </button>
    </main>
  );
};
