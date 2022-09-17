import { useEffect, useRef } from "react";
import type { CounterContextType, CounterType } from "../context/@types";

export const useChangeCounter = (props: CounterContextType) => {
  const {
    setCounter,
    finish,
    counter: { isStarted, time },
  } = props;

  const intervalRef = useRef(null) as React.MutableRefObject<number | null>;

  // Start the interval
  const startInterval = (callback: () => void) => {
    if (intervalRef.current !== null) return;

    intervalRef.current = window.setInterval(() => {
      callback();
    }, 1000);
  };

  // Stop the interval
  const stopInterval = (callback: () => void) => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
      callback();
    }
  };

  useEffect(() => {
    if (isStarted) {
      time > 0
        ? startInterval(() => {
            setCounter((prev: CounterType) => {
              if (prev.time > 0) {
                return {
                  ...prev,
                  time: prev.time - 1,
                };
              } else {
                stopInterval(() => finish());
                return prev;
              }
            });
          })
        : stopInterval(() => finish());
    }

    // here's the cleanup function
    return () => {
      if (intervalRef.current !== null) {
        stopInterval(() => finish());
      }
    };
  }, [isStarted]);
};
