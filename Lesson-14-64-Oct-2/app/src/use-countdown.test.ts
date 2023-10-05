import { act, renderHook, waitFor } from "@testing-library/react";

import { useCountdown } from "./use-countdown";

it("should return count === initialValue and isCountingDown === false on the first render", () => {
  const initialCount = 20;

  const { result } = renderHook(() => useCountdown(initialCount));

  expect(result.current.count).toBe(initialCount);
  expect(result.current.isCountingDown).toBe(false);
});

it("should decrease count and return isCountingDown === true after start() was called", () => {
  const initialCount = 40;
  const { result } = renderHook(() => useCountdown(initialCount));

  act(() => {
    result.current.start();
  });

  waitFor(
    () => {
      expect(result.current.count).toBe(initialCount - 1);
      expect(result.current.isCountingDown).toBe(true);
    },
    { interval: 250 },
  );
});
