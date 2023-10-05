import { act, renderHook, waitFor } from "@testing-library/react";

import { useCountdown } from "./countdown";

it("returns correct initial data", () => {
  const initialCount = 120;

  const { result } = renderHook(() => useCountdown(initialCount));
  const [{ count, isOver }] = result.current;

  expect(count).toBe(initialCount);
  expect(isOver).toBe(true);
});

it("has the default initial count of 30s", () => {
  const { result } = renderHook(() => useCountdown());
  const [{ count }] = result.current;

  expect(count).toBe(60);
});

it("runs the countdown on start() call, sets isOver to false", () => {
  const initialCount = 60;
  const { result } = renderHook(() => useCountdown());
  const [, { start }] = result.current;

  act(() => {
    start();
  });

  waitFor(
    () => {
      expect(result.current[0].count).toBe(initialCount - 1);
      expect(result.current[0].isOver).toBe(false);
    },
    { interval: 250 },
  );
});

// describe("kf
