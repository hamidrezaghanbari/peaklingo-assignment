import type { ReactNode } from "react";

// @types.IconWrapper.tsx
export interface IconWrapperType {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  role?: string;
  id?: string;
  viewBox?: string;
  width?: string;
  height?: string;
  style?: StyleProp<T>;
}

export interface IconType {
  onClick?: () => void;
  className?: string;
  style?: StyleProp<T>;
}
