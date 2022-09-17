import type { ReactNode } from "react";

// @types.CounterContext.tsx
export interface CounterType {
  time: number;
  isStarted: boolean;
}
export type CallBackType = (counter: CounterType) => CounterType;
export type FinishCallBackType = () => void;

export interface CounterContextType {
  counter: CounterType;
  finish: FinishCallBackType;
  setCounter: (callback: CallBack) => void;
  resetCounter: () => void;
}
export interface CounterProviderPropsType {
  children: ReactNode | ReactNode[];
}
