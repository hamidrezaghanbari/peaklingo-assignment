import { createContext, useState } from "react";
import type { ReactElement } from "react";
import type {
  CounterContextType,
  CounterProviderPropsType,
  CounterType,
} from "./@types";
import { useChangeCounter } from "../hooks";

const DEFAULT_COUNTER_TIME = 15;

const defaultCounter = {
  time: DEFAULT_COUNTER_TIME,
  isStarted: false,
};
export const CounterContext = createContext<CounterContextType | null>(null);

export const CounterProvider = ({
  children,
}: CounterProviderPropsType): ReactElement => {
  const [counter, setCounter] = useState<CounterType>(defaultCounter);

  // Hook for change counter time

  const resetCounter = () => {
    setCounter({
      time: DEFAULT_COUNTER_TIME,
      isStarted: true,
    });
  };
  const finish = () => {
    setCounter({
      time: 0,
      isStarted: false,
    });
  };

  useChangeCounter({ setCounter, finish, counter, resetCounter });

  return (
    <CounterContext.Provider
      value={{
        counter: counter,
        finish: finish,
        setCounter: setCounter,
        resetCounter: resetCounter,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
