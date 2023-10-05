import { useEffect, useRef, useState } from "react";

export const useCountdown = (countdownValue: number) => {
  const [count, setCount] = useState(countdownValue);
  const [isCountingDown, setIsCountingDown] = useState(false);

  const timerRef = useRef<NodeJS.Timer>();

  const start = () => {
    setIsCountingDown(true);

    timerRef.current = setInterval(() => {
      setCount((currentCount) => {
        if (currentCount <= 0) {
          clearInterval(timerRef.current);
          setIsCountingDown(false);
          return 0;
        }

        return --currentCount;
      });
    }, 1000);
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return {
    count,
    isCountingDown,
    start,
  };
};
